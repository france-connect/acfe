<template>
  <header>
    <nav id="toolbar">
      <div class="logo">
        <img src="../../assets/images/agent_connect.svg" alt="Agent Connect" />
      </div>
      <div class="menu">
        <div class="navigation borderYtoX" v-if="isAuthenticate !== 'success'">
          <router-link class="animation" :to="{ name: 'agentConnect' }"
            >Accueil</router-link
          >
        </div>
        <div class="navigation borderYtoX" v-if="isAuthenticate === 'success'">
          <router-link class="animation" :to="{ name: 'callback' }"
            >userInfos</router-link
          >
        </div>
        <button
          class="navigation"
          v-if="isAuthenticate === 'success'"
          @click="logout"
        >
          Me deconnecter
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { AUTH_LOGOUT_AC } from "@/store/actions/auth";
import { mapGetters } from "vuex";

export default {
  name: "Toolbar",
  computed: {
    isAuthenticate() {
      return this.authStatus;
    },
    ...mapGetters(["authStatus"])
  },
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT_AC);
    }
  }
};
</script>
