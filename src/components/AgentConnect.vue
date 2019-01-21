<template>
  <div class="agent-connect">
    <div>Vous pouvez tester la connexion à un Fournisseur d'Identité en cliquant sur le bouton FranceConnect</div>
    <div>
      <button v-on:click="login">AgentConnect</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentConnect",
  methods: {
    login: function() {

    } 
  }
};
</script>

