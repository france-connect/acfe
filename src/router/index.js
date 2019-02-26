import Vue from "vue";
import Router from "vue-router";
import Callback from "@/views/Callback";
import AgentConnect from "@/components/AgentConnect";

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
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});
