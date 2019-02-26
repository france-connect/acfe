<template>
  <div class="wrapper">
    <Toolbar />

    <section>
      <h1>Bienvenue sur Agent Connect</h1>
      <div class="content">
        Vous êtes sur une application de test. Cette application vous permet de
        simuler une cinématique de connexion.
      </div>
      <router-view></router-view>
    </section>

    <Footer />
  </div>
</template>

<script>
import Toolbar from "@/components/layout/Toolbar";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    Toolbar,
    Footer
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
