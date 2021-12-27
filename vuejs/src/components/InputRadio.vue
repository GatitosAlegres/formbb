<template>
  <form class="ui form">
    <div class="ui radio checkbox">
      <input
        type="radio"
        name="frequency"
        id="one"
        checked="checked"
        v-model="picked"
      />
      <label for="one">{{ title }}</label>
    </div>
  </form>
</template>
<script>
export default {
  name: "InputRadio",
  props: ["title"],
};
</script>
<style lang="css">
</style>