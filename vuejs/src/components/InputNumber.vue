<template>
  <form class="ui form">
    <div class="field">
      <label>{{ title }}</label>
      <input type="number" name="" placeholder="" />
    </div>
  </form>
</template>
<script>
export default {
  name: "InputNumber",
  props: ["title", "name"],
};
</script>
<style>
</style>