<template>
  <div id="callback" class="content">
    <component
      :is="currentCallbackComponent"
      :errorUserInfo="error"
    ></component>
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
      userInfo: null,
      error: null
    };
  },
  components: {
    CallbackContent,
    CallbackLoading,
    CallbackError
  },
  computed: {
    currentCallbackComponent: function() {
      return this.callbackComponent;
    },
    ...mapGetters(["authStatus"])
  },
  mounted() {
    if (this.authStatus === "success") {
      this.callbackComponent = "CallbackContent";
    } else {
      this.$store
        .dispatch(USER_INFO_AC, this.$route.query.code)
        .then(response => {
          this.userInfo = response;
          this.callbackComponent = "CallbackContent";
        })
        .catch(error => {
          console.log("catch error callback", error);
          this.error = "Sorry Bro il y a un probleme";
          this.callbackComponent = "CallbackError";
        });
    }
  }
};
</script>
