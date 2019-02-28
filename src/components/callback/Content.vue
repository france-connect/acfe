<template>
  <div id="callback-content" v-if="userInfo !== null">
    <!--<div style="flex-direction: column; flex-grow: 1">
      <h2>Votre identité retourné par l'annuaire</h2>
      <div class="scopeprint">
        <div
          v-for="(value, key, index) in userInfo"
          :key="key"
        >{{ index }} - {{ key }} : {{ value }}</div>
      </div>
    </div>-->
    <h2>Votre identité retourné au format JSON</h2>
    <pre class="prettyprint">{{ userInfo }}</pre>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "CallbackContent",
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    ...mapGetters(["authStatus", "userInfos"])
  },
  mounted() {
    if (localStorage.authenticate === "success") {
      this.userInfo = localStorage.userInfos;
    }
  }
};
</script>
