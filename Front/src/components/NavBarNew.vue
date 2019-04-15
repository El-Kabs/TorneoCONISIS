<template>
  <div>
    <vs-navbar  v-model="activeItem" class="nabarx" type="flat">
      <div slot="title">
        <vs-navbar-title>Torneos - CONISIS</vs-navbar-title>
      </div>
      

      <vs-navbar-item index="0" v-if="!isAuthenticated">
        <a href="#">Ranking</a>
      </vs-navbar-item>
      <vs-navbar-item index="1" v-if="!isAuthenticated">
        <a href="#" v-on:click="login">Login</a>
      </vs-navbar-item>

      <vs-navbar-item index="2" v-if="isAuthenticated">
        <a v-if="isAuthenticated" class="saludo">Hola {{ profile.given_name }}!</a>
      </vs-navbar-item>
      
      <vs-navbar-item index="3" v-if="isAuthenticated">
        <a href="#">Modificar Ranking</a>
      </vs-navbar-item>
      <vs-navbar-item index="4" v-if="isAuthenticated">
        <a href="#" v-on:click="logout">Log Out</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBarNew",
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
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {},
      activeItem: 0
    };
  }
};
</script>

<style scoped>
.saludo{
  padding: 0
}
</style>
