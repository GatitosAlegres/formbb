<template>
  <div class="ui container general-data">
    <div class="title">
      <h1 class="ui header">
        {{ title }}
        <h3 class="sub header">{{ subtitle }}</h3>
      </h1>
    </div>
    <div class="ui huge labels category">
      <div class="ui label">
        <router-link to="/"><i class="fas fa-chevron-left"></i></router-link>
        REGISTRO DEL NACIDO
      </div>
    </div>
    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <div class="ui segment">
          <form class="ui form">
            <h3 class="ui header">Datos generales</h3>
            <div class="ui blue segment">
              <InputText :title="'Apellido Paterno'" />
              <InputText :title="'Apellido Materno'" />
              <InputText :title="'Nombres'" />
            </div>
            <h3 class="ui header">Fecha y Hora</h3>
            <div class="ui blue segment">
              <div class="field" id="date">
                <p class="ui tiny header" style="padding-right: 16px">
                  Fecha de Nacimiento
                </p>
                <input type="date" />
              </div>
              <div class="field" style="display: flex; align-items: center">
                <p class="ui tiny header" style="padding-right: 40px">
                  Hora de <br />nacimiento
                </p>
                <input type="time" style="width: 12rem" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <form class="ui form">
            <div class="field">
              <InputNumber :title="'N° de certificado de nacimiento'" />
            </div>
            <h3 class="ui header">Lugar de Nacimiento</h3>
            <div class="ui blue segment">
              <div class="field">
                <ComboBox
                  :first-item="'Selecione una región'"
                  :title-combo="'Regiones'"
                  :items="regionesPeru"
                />
              </div>
              <div class="field">
                <ComboBox
                  :first-item="'Selecione una provincia'"
                  :title-combo="'Provincia'"
                />
              </div>
              <div class="field">
                <ComboBox
                  :first-item="'Selecione una Localidad'"
                  :title-combo="'Localidad'"
                />
              </div>
            </div>
            <div class="field">
              <ComboBox
                :first-item="'Clinica, Hospital, Centro de Salud o Hogar'"
                :title-combo="'Donde se atendio el parto'"
              />
            </div>
            <div class="field">
              <label>Fue Registrado</label>
              <InputCheckBox :first-option="'Muerto'" :second-option="'Vivo'" />
            </div>
            <div class="field">
              <ComboBox
                :first-item="'Seleccione una opción'"
                :title-combo="'Comparecio'"
                :items="['Mama', 'Papa']"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="btn-continuar">
      <button class="ui button purple">
        Continuar<i class="play icon" style="padding-left: 16px"></i>
      </button>
    </div>
  </div>
</template>

<style>
.general-data {
  padding: 1em;
  margin-top: 1em;
}
.general-data .title {
  text-align: end;
  margin-bottom: 3em;
}

.general-data .btn-continuar {
  margin-top: 2em;
  display: flex;
  margin-right: 10px;
  justify-content: flex-end;
}

.general-data .category {
  padding-left: 1em;
}

.field {
  padding-bottom: 0.5rem;
}

#date {
  display: flex;
}
</style>
<script>
import ComboBox from "../components/ComboBox.vue";
import Inputs from "../containers/Inputs";
import Data from "../data/db.js";

const { regionesPeru } = Data;
const { InputNumber, InputCheckBox, InputText } = Inputs;

export default {
  name: "NewbornR",
  data: () => ({
    title: "Registro del Nacido",
    subtitle: "Registro Civil",
    titleCombo: "Regiones",
    regionesPeru,
  }),
  components: {
    ComboBox,
    InputNumber,
    InputCheckBox,
    InputText,
  },
};
</script>
