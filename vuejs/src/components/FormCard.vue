<template>
  <div class="ui segment items form-card">
    <div class="item">
      <div class="image ui center aligned icon header">
        <i class="far fa-user fa-5x user-form"></i>
        <h4>{{ title }}</h4>
      </div>
      <div class="content">
        <div class="ui four column grid">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "./Form.vue";

export default {
  name: "FormCard",
  props: ["title"],
  components: {
    Form,
  },
};
</script>
<style>
.user-form {
  color: rgb(189, 189, 189);
}
</style>