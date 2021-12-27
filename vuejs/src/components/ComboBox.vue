<template>
  <form class="ui form">
    <div class="field">
      <label>{{ titleCombo }}</label>
      <select name="name" id="departamentos" class="ui search dropdown">
        <option :value="a">{{ firstItem }}</option>
        <option
          v-for="(item, index) in items"
          :key="index"
          :label="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </form>
</template>
<script>
export default {
  name: "ComboBox",
  props: ["titleCombo", "items", "firstItem"],
};
</script>
<style>
</style>