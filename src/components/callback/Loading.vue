<template>
  <div id="callback-loading">
    <p>
      Nous sommes en train de récupérer les infos<span>.</span><span>.</span
      ><span>.</span>
    </p>
    <div class="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
// https://loading.io/css/

export default {
  name: "CallbackLoading"
};
</script>
