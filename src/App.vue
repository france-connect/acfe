<template>
  <div class="wrapper">
    <header>
      <nav>
        <div class="navigation">
          <router-link :to="{ name: 'agentConnect' }">AgentConnect</router-link>
        </div>
        <div class="navigation">
          <router-link :to="{ name: 'openidConnect' }">OpenidConnect</router-link>
        </div>
      </nav>
    </header>
    <section>
      <h1>Bienvenue sur Agent Connect</h1>
      <div>Vous êtes sur une application de test. Cette application vous permet de simuler une cinématique de connexion.</div>
      <!--<router-view></router-view>-->
      <div>Vous pouvez tester la connexion à un Fournisseur d'Identité en cliquant sur le bouton FranceConnect</div>
      <div>
        <button v-on:click="login" >AgentConnect</button>
      </div>
    </section>
    <footer class="text-right">Agent Connect - Application de démonstration</footer>
  </div>
</template>

<script>
import { HTTP } from "@/https-constant.js";

export default {
  name: "App",
  methods: {
    login: function() {

    } 
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
