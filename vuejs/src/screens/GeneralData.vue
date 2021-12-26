<template>
  <div class="ui container general-data">
    <div class="title">
      <h1 class="ui header">
        {{ title }}
        <h3 class="sub header">{{ subtitle }}</h3>
      </h1>
    </div>
    <div class="ui huge labels category">
      <div class="ui label">DATOS GENERALES</div>
    </div>
    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <div class="ui segment">
          <form class="ui form">
            <div class="four wide field">
              <label>Oficialia N°</label>
              <input type="number" name="oficialia" />
            </div>
            <div class="four wide field">
              <label>Libro N°</label>
              <input type="number" name="libro" />
            </div>
            <div class="four wide field">
              <label>Acta N°</label>
              <input type="number" name="acta" />
            </div>
          </form>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <form class="ui form">
            <div class="field">
              <label>Departamento</label>
              <select
                name="departamentos"
                id="departamentos"
                class="ui fluid dropdown"
              >
                <option value="">Cajamarca</option>
              </select>
            </div>
            <div class="field">
              <label>Municipio o Delegación</label>
              <select name="municipio" id="municipio" class="ui fluid dropdown">
                <option value="">Yonan-Tembladera</option>
              </select>
            </div>
            <div class="field">
              <label>Localidad</label>
              <select name="localidad" id="localidad" class="ui fluid dropdown">
                <option value="">Tembladera</option>
              </select>
            </div>
            <div class="field" id="date">
              <p class="ui tiny header" style="padding-right: 16px">
                Fecha de Registro
              </p>
              <input type="date" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="btn-continuar">
      <router-link to="/registro"
        ><button class="ui button purple">
          Continuar<i class="play icon" style="padding-left: 16px"></i></button
      ></router-link>
    </div>
    <!-- <div class="ui vertical divider" /> -->
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

#date {
  display: flex;
}
</style>

<script>
export default {
  name: "GeneralData",
  data: () => ({
    title: "ACTA DE NACIMIENTO",
    subtitle: "Registro Civil",
  }),
};
</script>