import auth0 from "auth0-js";
import { EventEmitter } from "events";
import authConfig from "../../auth_config.json";

const webAuth = new auth0.WebAuth({
  domain: authConfig.domain,
  redirectUri: `${window.location.origin}/callback`,
  clientID: authConfig.clientId,
  responseType: "token id_token",
  scope: "openid profile write:scores",
  audience: authConfig.audience
});

const localStorageKey = "loggedIn";
const loginEvent = "loginEvent";

class AuthService extends EventEmitter {
  idToken = null;
  profile = null;
  tokenExpiry = null;

  login(customState) {
    webAuth.authorize({
      appState: customState
    });
  }

  logOut() {
    localStorage.removeItem(localStorageKey);

    this.idToken = null;
    this.tokenExpiry = null;
    this.profile = null;

    webAuth.logout({
      returnTo: `${window.location.origin}`
    });

    this.emit(loginEvent, { loggedIn: false });
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult.idToken);
        }
      });
    });
  }

  isAuthenticated() {
    if(localStorage.getItem(localStorageKey) === "true"){
      return true
    }
    else{
      return false
    }
  }

  isIdTokenValid() {
    return (
      this.idToken &&
      this.tokenExpiry &&
      Date.now() < this.tokenExpiry
    );
  }

  getIdToken() {
    return new Promise((resolve, reject) => {
      if (this.isIdTokenValid()) {
        resolve(this.idToken);
      } else if (this.isAuthenticated()) {
        this.renewTokens().then(authResult => {
          resolve(authResult.idToken);
        }, reject);
      } else {
        resolve();
      }
    });
  }

  getAccessToken() {
    return new Promise((resolve, reject) => {
      if (this.isAccessTokenValid()) {
        resolve(this.accessToken);
      } else {
        this.renewTokens().then(authResult => {
          resolve(authResult.accessToken);
        }, reject);
      }
    });
  }

  getProfile(){
    return localStorage.getItem("name")
  }

  localLogin(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // Convert the expiry time from seconds to milliseconds,
    // required by the Date constructor
    this.tokenExpiry = new Date(this.profile.exp * 1000);

    this.accessToken = authResult.accessToken;

    localStorage.setItem(localStorageKey, "true");
    localStorage.setItem("name", this.profile.given_name);

    // eslint-disable-next-line no-undef
    $cookies.set('token', this.accessToken);

    this.emit(loginEvent, {
      loggedIn: true,
      profile: authResult.idTokenPayload,
      state: authResult.appState || {}
    });
  }

  renewTokens() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(localStorageKey) !== "true") {
        return reject("Not logged in");
      }

      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult);
        }
      });
    });
  }
}

const service = new AuthService();

service.setMaxListeners(5);

export default service;
