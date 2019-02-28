<template>
  <div id="callback" class="content">
    <component :is="callbackComponent" :errorUserInfo="error"></component>
  </div>
</template>

<script>
import CallbackContent from "@/components/callback/Content";
import CallbackLoading from "@/components/callback/Loading";
import CallbackError from "@/components/callback/Error";

import { USER_INFO_AC } from "@/store/actions/user";
import { mapGetters } from "vuex";

export default {
  name: "callback",
  data() {
    return {
      callbackComponent: "CallbackLoading",
      error: null
    };
  },
  components: {
    CallbackContent,
    CallbackLoading,
    CallbackError
  },
  computed: {
    ...mapGetters(["authStatus"])
  },
  mounted() {
    if (localStorage.authenticate === "success") {
      this.callbackComponent = "CallbackContent";
    } else {
      this.$store
        .dispatch(USER_INFO_AC, this.$route.query.code)
        .then(response => {
          localStorage.authenticate = this.authStatus;
          localStorage.userInfos = response;
          this.callbackComponent = "CallbackContent";
        })
        .catch(error => {
          this.error = error;
          this.callbackComponent = "CallbackError";
        });
    }
  }
};
</script>
