<template>
  <div>
    <div class="row">
      <h5>Agregar</h5>
      <div class="column">
        <vs-input class="inputx s" placeholder="Nombre Completo" v-model="nombreA"/>
      </div>
      <div class="column">
        <vs-input class="inputx s" placeholder="Puntaje" v-model="puntajeA"/>
      </div>
      <div class="column">
        <vs-button class="s d" color="success" type="filled" v-on:click="agregar">Agregar</vs-button>
      </div>
      <p>{{agregarResponse}}</p>
    </div>
    <br>
    <div class="row">
      <h5>Modificar</h5>
      <div class="column">
        <vs-input class="inputx s" placeholder="Nombre Completo" v-model="nombreM"/>
      </div>
      <div class="column">
        <vs-input class="inputx s" placeholder="Puntaje" v-model="puntajeM"/>
      </div>
      <div class="column">
        <vs-button class="s d" color="success" type="filled" v-on:click="modificar">Modificar</vs-button>
      </div>
      <p>{{modificarResponse}}</p>
    </div>
  </div>
</template>

<script>
import auth from "../auth/authService";
export default {
  name: "modificar",
  data() {
    return {
      nombreA: "",
      puntajeA: "",
      nombreM: "",
      puntajeM: "",
      agregarResponse: "",
      modificarResponse: ""
    };
  },
  methods: {
    agregar() {
      const _this = this;
      var url = "https://torneoconisis.herokuapp.com/api/guardarPuntaje";
      var data = {
        nombre: _this.nombreA,
        puntaje: _this.puntajeA
      };
      var token = $cookies.get("token");
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      })
        .then(res => res.text())
        .catch(error => console.error("Error:", error))
        .then(response => {
          this.agregarResponse = response;
        });
    },
    modificar(){
      const _this = this;
      console.log(_this.nombreM)
      var url = "https://torneoconisis.herokuapp.com/api/modificarPuntaje";
      var data = {
        nombre: _this.nombreM,
        puntaje: _this.puntajeM
      };
      var token = $cookies.get("token");
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      })
        .then(res => res.text())
        .catch(error => console.error("Error:", error))
        .then(response => {
          this.modificarResponse = response;
        });
    }
  }
};
</script>

<style scoped>
.s {
  margin-left: 25%;
  margin-right: 30%;
  padding-right: 30%; 
}
.d {
  margin-left: 50% !important;
}
</style>
