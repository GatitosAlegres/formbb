<template>
  <form class="ui form form-radio">
    <label>{{ firstOption }}</label>
    <div class="ui fitted toggle checkbox">
      <input
        type="checkbox"
        class="input-radio"
        v-model="checked"
      /><label></label>
    </div>
    <label>{{ secondOption }}</label>
  </form>
</template>
<script>
export default {
  name: "InputRadio",
  props: ["firstOption", "secondOption"],
};
</script>
<style>
.form-radio {
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  align-items: center;
}
</style>