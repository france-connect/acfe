import Vue from "vue";
import Router from "vue-router";
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
      name: "agentConnect",
      component: AgentConnect
    },
    {
      path: "openid-connect",
      name: "openidConnect",
      component: OpenidConnect
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});
