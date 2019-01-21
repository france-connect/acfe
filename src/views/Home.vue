<template>
  <AgentConnect ></AgentConnect>
</template>

<script>
// @ is an alias to /src
import AgentConnect from "@/components/AgentConnect.vue";
import OpenidConnect from "@/components/OpenidConnect.vue";

export default {
  name: "home",
  components: {
    AgentConnect,
    OpenidConnect
  }
};
</script>
