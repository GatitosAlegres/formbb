<template>
  <div class="field">
    <label>{{ titleCombo }}</label>
    <select name="departamentos" id="departamentos" class="ui fluid dropdown" >
       <option  v-for="(item, index) in items" 
                :key="index"
                :label="item"
                :value="item">
                {{item}}
        </option> 
    </select>
  </div>
</template>
<script>
export default {
  name: "ComboBox",
  props: [
    'titleCombo',
    'items'
  ]
};
</script>
<style>
</style>