<template>
  <div class="barra">
    <vs-navbar  v-model="activeItem" class="nabarx" type="flat">
      <div slot="title">
        <vs-navbar-title>Torneos - CONISIS</vs-navbar-title>
      </div>    
      <vs-navbar-item index="1" v-if="!isAuthenticated">
        <a href="#" v-on:click="login">Login</a>
      </vs-navbar-item>

      <vs-navbar-item index="2" v-if="isAuthenticated">
        <a v-if="isAuthenticated" class="saludo">Hola!</a>
      </vs-navbar-item>
      <vs-navbar-item index="0">
        <router-link :to="{ name: 'home'}">
            Ranking
          </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3" v-if="isAuthenticated">
          <router-link :to="{ name: 'modificar'}">
            Modificar Ranking
          </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4" v-if="isAuthenticated">
        <a href="#logout" v-on:click="logout">Log Out</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
import auth from "../auth/authService";
export default {
  name: "NavBarNew",
  mounted(){
    this.isAuthenticated = auth.isAuthenticated()
    this.name = auth.getProfile()
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    },
    agregar(){
      const _this = this;
      _this.$router.push({ path: 'agregarPuntaje' })
    },
    modificar(){
      const _this = this;
      _this.$router.push({ path: 'modificarRanking' })
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {},
      activeItem: 0,
      name: ""
    };
  }
};
</script>

<style scoped>
.saludo{
  padding: 0
}
.barra{
  background-color: #f2d100;
}
</style>
