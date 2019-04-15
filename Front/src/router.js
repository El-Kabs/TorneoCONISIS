import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Callback from "./components/Callback.vue";
import auth from "./auth/authService";
import VueCookies from 'vue-cookies';
import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css';
import "vue-material-design-icons/styles.css";
import MenuIcon from "vue-material-design-icons/Menu.vue";

Vue.use(Router);
Vue.use(VueCookies);
Vue.use(Vuesax);
Vue.component("menu-icon", MenuIcon);




const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
    return next();
  }

  auth.login({ target: to.path });
});

export default router;
