<template>
  <div id="agent-connect" class="content">
    <div>Vous pouvez tester la connexion à un Fournisseur d'Identité en cliquant sur le bouton FranceConnect</div>
    <div class="text-center mt-1">
      <button v-on:click="login">Se connecter sur Agent Connect</button>
    </div>
  </div>
</template>

<script>
import { AUTH_REQUEST_AC } from "@/store/actions/auth";

export default {
  name: "AgentConnect",
  methods: {
    login: function() {
      this.$store.dispatch(AUTH_REQUEST_AC);
    }
  }
};
</script>
