"""Python Flask API Auth0 integration example
"""

from functools import wraps
import json
from os import environ as env
from six.moves.urllib.request import urlopen

from dotenv import load_dotenv, find_dotenv
from flask import Flask, request, jsonify, _request_ctx_stack
from flask_cors import cross_origin
from jose import jwt

import sqlite3
from sqlite3 import Error

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)
AUTH0_DOMAIN = env.get("AUTH0_DOMAIN")
API_IDENTIFIER = env.get("API_IDENTIFIER")
ALGORITHMS = ["RS256"]
APP = Flask(__name__)

ranking_table = """ CREATE TABLE IF NOT EXISTS ranking (
                                        id integer PRIMARY KEY,
                                        nombre text NOT NULL,
                                        puntos integer NOT NULL
                                    ); """

# Format error response and append status code.
class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


def crearTabla(conn, tabla):
    try:
        c = conn.cursor()
        c.execute(tabla)
    except Error as e:
        print(e)

def insertarPuntaje(puntaje):
    conn = sqlite3.connect('ranking.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO ranking (nombre, puntos) VALUES (?,?)", puntaje)
    cur.close()
    conn.commit()
    conn.close()

def modifPuntaje(puntaje):
    conn = sqlite3.connect('ranking.db')
    cur = conn.cursor()
    cur.execute("UPDATE ranking SET puntos = ? where nombre = ?;", (puntaje[1], puntaje[0]))
    cur.close()
    conn.commit()
    conn.close()

try:
    conn = sqlite3.connect('ranking.db')
    crearTabla(conn, ranking_table)
except Error as e:
    print(e)
finally:
    conn.close()



@APP.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


def get_token_auth_header():
    """Obtains the access token from the Authorization Header
    """
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise AuthError({"code": "authorization_header_missing",
                        "description":
                            "Authorization header is expected"}, 401)

    parts = auth.split()

    if parts[0].lower() != "bearer":
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must start with"
                            " Bearer"}, 401)
    elif len(parts) == 1:
        raise AuthError({"code": "invalid_header",
                        "description": "Token not found"}, 401)
    elif len(parts) > 2:
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must be"
                            " Bearer token"}, 401)

    token = parts[1]
    return token


def requires_scope(required_scope):
    """Determines if the required scope is present in the access token
    Args:
        required_scope (str): The scope required to access the resource
    """
    token = get_token_auth_header()
    unverified_claims = jwt.get_unverified_claims(token)
    if unverified_claims.get("scope"):
        token_scopes = unverified_claims["scope"].split()
        for token_scope in token_scopes:
            if token_scope == required_scope:
                return True
    return False


def requires_auth(f):
    """Determines if the access token is valid
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = get_token_auth_header()
        jsonurl = urlopen("https://"+AUTH0_DOMAIN+"/.well-known/jwks.json")
        jwks = json.loads(jsonurl.read())
        try:
            unverified_header = jwt.get_unverified_header(token)
        except jwt.JWTError:
            raise AuthError({"code": "invalid_header",
                            "description":
                                "Invalid header. "
                                "Use an RS256 signed JWT Access Token"}, 401)
        if unverified_header["alg"] == "HS256":
            raise AuthError({"code": "invalid_header",
                            "description":
                                "Invalid header. "
                                "Use an RS256 signed JWT Access Token"}, 401)
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == unverified_header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=ALGORITHMS,
                    audience=API_IDENTIFIER,
                    issuer="https://"+AUTH0_DOMAIN+"/"
                )
            except jwt.ExpiredSignatureError:
                raise AuthError({"code": "token_expired",
                                "description": "token is expired"}, 401)
            except jwt.JWTClaimsError:
                raise AuthError({"code": "invalid_claims",
                                "description":
                                    "incorrect claims,"
                                    " please check the audience and issuer"}, 401)
            except Exception:
                raise AuthError({"code": "invalid_header",
                                "description":
                                    "Unable to parse authentication"
                                    " token."}, 401)

            _request_ctx_stack.top.current_user = payload
            return f(*args, **kwargs)
        raise AuthError({"code": "invalid_header",
                        "description": "Unable to find appropriate key"}, 401)
    return decorated


# Controllers API
@APP.route("/api/tablaDinosaurio")
@cross_origin(headers=["Content-Type", "Authorization"])
def darTablaDinosaurio():
    jsonRetorno = {}
    conn = sqlite3.connect('ranking.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM 'ranking' ORDER BY puntos DESC;")
    for registro in cur:
        jsonRetorno[registro[1]] = registro[2]
    cur.close()
    conn.close()
    return jsonify(jsonRetorno)


@APP.route("/api/guardarPuntaje", methods=['GET', 'POST'])
@cross_origin(headers=["Content-Type", "Authorization"])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@requires_auth
def guardarPuntaje():
    if(request.method == 'GET'):
        return 'GET'
    else:
        data = request.data
        puntaje = json.loads(data)
        puntajeGuardar = (puntaje['nombre'], puntaje['puntaje'])
        insertarPuntaje(puntajeGuardar)
        return "Se guardó el puntaje: "+str(puntaje['puntaje'])+" del usuario: "+str(puntaje['nombre'])
    
@APP.route("/api/modificarPuntaje", methods=['GET', 'POST'])
@cross_origin(headers=["Content-Type", "Authorization"])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@requires_auth
def modificarPuntaje():
    if(request.method == 'GET'):
        return 'GET'
    else:
        data = request.data
        puntaje = json.loads(data)
        puntajeModificar = (puntaje['nombre'], puntaje['puntaje'])
        modifPuntaje(puntajeModificar)
        return "Se guardó el puntaje: "+str(puntaje['puntaje'])+" del usuario: "+str(puntaje['nombre'])


if __name__ == "__main__":
    APP.run(host="0.0.0.0", port=env.get("PORT", 3010))
