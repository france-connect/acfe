import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Callback from "./views/Callback.vue";
import AgentConnect from "./components/AgentConnect.vue";
import OpenidConnect from "./components/OpenidConnect.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            path: '/',
            name: 'agentConnect',
            component: AgentConnect
        },
        {
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            path: 'openid',
            name: 'openidConnect',
            component: OpenidConnect
        }
      ]
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});
