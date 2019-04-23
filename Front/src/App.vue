<template>
  <div id="app" class="bartxd">  
    <NavBarNew/>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import "jquery";
import "samples-bootstrap-theme";
import "samples-bootstrap-theme/dist/css/auth0-theme.css";

import NavBar from "./components/NavBar";
import NavBarNew from "./components/NavBarNew"

export default {
  components: {
    NavBar,
    NavBarNew
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch {
      // Supress the 'not logged in' error as we can illegitimately get that
      // when processing the callback url
    }
  }
};
</script>
<style>
html{
  height: 100%;
}
body{
  height: 100%;
}
.bartxd{
  background-image: url("../public/dino.jpg");
  height: 100%;
}
</style>

