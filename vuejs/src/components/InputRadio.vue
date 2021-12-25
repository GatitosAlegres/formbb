<template>
    <div class="ui form">
        <div class="ui radio checkbox">
        <input type="radio" name="frequency" checked="checked">
        <label>{{title}}</label>
      </div>
    </div>
</template>
<script>
export default {
    name: "InputRadio",
    props: ["title"]
}
</script>
<style lang="">
    
</style>