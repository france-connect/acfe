import Vue from "vue";
import Router from "vue-router";
import Callback from "@/views/Callback";
import AgentConnect from "@/components/AgentConnect";
import OpenidConnect from "@/components/OpenidConnect";
//import CallbackContent from "@/components/callback/content";
//import CallbackLoading from "@/components/callback/loading";
//import CallbackError from "@/components/callback/error";

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
      path: "/openid-connect",
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
