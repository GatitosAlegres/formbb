<template>
  <form class="ui form">
    <div class="field">
      <InputText :title="'Apellidos y Nombre'" />
    </div>
    <div class="field">
      <div class="ui two columns grid">
        <ComboBox
          :titleCombo="'Estado Civil'"
          :items="civilStatus"
          :firstItem="'Seleccione su Estado civil'"
        />
        <ComboBox
          :titleCombo="'Edad'"
          :items="ages(16, 100)"
          :firstItem="'Seleccione una Edad'"
        />
      </div>
    </div>
    <div class="field">
      <InputText :title="'Ocupacion'" />
    </div>
    <div class="field five wide">
      <ComboBox
        :titleCombo="'Nacionalidad'"
        :items="nationalities"
        :firstItem="'Pais'"
      />
    </div>
    <div class="field">
      <InputText :title="'Domicilio'" />
    </div>
  </form>
</template>
<script>
import ComboBox from "./ComboBox.vue";
import Inputs from "../containers/Inputs";
import data from "../data/db";

const { InputText } = Inputs;
const { ages, civilStatus, nationalities } = data;

export default {
  name: "Form",
  data: () => ({
    ages,
    civilStatus,
    nationalities,
  }),
  components: {
    ComboBox,
    InputText,
  },
};
</script>
<style>
.field {
  padding-bottom: 0.5rem;
}
</style>