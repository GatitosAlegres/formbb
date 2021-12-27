<template>
  <div class="ui container general-data">
    <div class="ui huge labels category">
      <div class="ui label">
        <router-link to="/padres"
          ><i class="fas fa-chevron-left"></i
        ></router-link>
        REGISTRO DE LOS ABUELOS
      </div>
    </div>
    <div class="ui two column doubling stackable grid container">
      <div class="column aligned padded grid">
        <FormCard :title="'Abuelo Paterno'" />
      </div>
      <div class="column">
        <FormCard :title="'Abuelo Materno'" />
      </div>
    </div>
    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <FormCard :title="'Abuela Paterno'" />
      </div>
      <div class="column">
        <FormCard :title="'Abuela Materna'" />
      </div>
    </div>
    <div class="btn-continuar">
      <router-link to="/abuelos"
        ><button class="ui button green">
          Finalizar<i
            class="fas fa-check"
            style="padding-left: 16px"
          ></i></button
      ></router-link>
    </div>
  </div>
</template>
<script>
import FormCard from "../components/FormCard.vue";
export default {
  name: "GrandparentsR",
  components: {
    FormCard,
  },
};
</script>
<style>
</style>