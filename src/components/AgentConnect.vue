<template>
  <div id="agent-connect" class="content">
    <div>Vous pouvez tester la connexion à un Fournisseur d'Identité en cliquant sur le bouton FranceConnect</div>
    <div>
      <button v-on:click="login">AgentConnect</button>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/https-constant";
import axios from "axios";
import config from '@/config/configManager'

export default {
  name: "AgentConnect",
  methods: {
    login: function() {
      axios({
        method: "GET",
        headers: { Autorization: `Bearer ${this.accessToken}`},
        url: `${config.FC_URL}${config.AUTHORIZATION_FC_PATH}`
      })
    } 
  }
};
</script>

