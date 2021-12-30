
<template >
  <div>
    <Main />
    <router-view />
  </div>
</template>

<script>

import Main from './screens/Main.vue'

export default {
  name: "App",
  components: {Main},
};
</script>

<style>
</style>
