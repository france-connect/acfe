<template>
  <div>
    <h2>Une erreur est survenue :</h2>
    <div>{{ errorUserInfo }}</div>
  </div>
</template>

<script>
// https://loading.io/css/

export default {
  name: "CallbackError",
  props: ["errorUserInfo"]
};
</script>
