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
      <div class="content">Vous êtes sur une application de test. Cette application vous permet de simuler une cinématique de connexion.</div>
      <router-view></router-view>
    </section>
    <footer class="text-right">@ AgentConnect 2019 - Application de démonstration</footer>
  </div>
</template>

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
