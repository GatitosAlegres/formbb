<template>
  <form class="ui form">
    <div class="field">
      <label>{{ title }}</label>
      <input type="text" name="" placeholder="" />
    </div>
  </form>
</template>
<script>
export default {
  name: "InputText",
  props: ["title", "name"],
};
</script>
<style>
</style>