<template>
  <div id="openid-connect" class="content">
    <div>Vous pouvez vérifier le niveau de compatibilité d'un Fournisseur d'Identité en cliquant sur le bouton "Test de compatibilité OpenId Connect".</div>
    <div class="text-center mt-1">
      <button v-on:click="login">Se connecter sur Openid Connect</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenidConnect",
  methods: {
    login: function() {}
  }
};
</script>
