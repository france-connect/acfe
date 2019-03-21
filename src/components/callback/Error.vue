<template>
  <div>
    <h2>Une erreur est survenue, veuillez réessayer plus tard.</h2>
    <!--<div>{{ errorUserInfo }}</div>-->
  </div>
</template>

<script>
export default {
  name: "CallbackError",
  props: ["errorUserInfo"]
};
</script>
