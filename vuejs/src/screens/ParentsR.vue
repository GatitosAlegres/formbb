<template>
  <div class="ui container general-data">
    <div class="ui huge labels category">
      <div class="ui label">
        <router-link to="/registro"
          ><i class="fas fa-chevron-left"></i
        ></router-link>
        REGISTRO DE LOS PADRES
      </div>
    </div>
    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <div class="ui center aligned icon header header-img-male">
          <i class="fas fa-mars fa-4x gender"></i>
          <h3 class="ui white medium header" style="color: white">Papa</h3>
        </div>
        <div class="ui blue segment">
          <Form />
        </div>
      </div>
      <div class="column">
        <div class="ui center aligned icon header header-img-female">
          <i class="fas fa-venus fa-4x gender"></i>
          <h3 class="ui white medium header" style="color: white">Mama</h3>
        </div>
        <div class="ui pink segment">
          <Form />
        </div>
      </div>
    </div>
    <div class="btn-continuar">
      <router-link to="/padres"
        ><button class="ui button purple">
          Continuar<i class="play icon" style="padding-left: 16px"></i></button
      ></router-link>
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

.header-img-male {
  color: white;
  background-image: linear-gradient(
    to right,
    #006fff,
    #4e82ff,
    #7196ff,
    #8fa9ff,
    #aabdff
  );
  border-radius: 16px;
  padding: 1rem !important;
  width: 75%;
}

.gender {
  color: white;
}

.header-img-female {
  color: white;
  background-image: linear-gradient(
    to right,
    #ff00f4,
    #ff50f7,
    #ff74f9,
    #ff90fa,
    #ffaafb
  );
  border-radius: 16px;
  padding: 1rem !important;
  width: 75%;
}

#date {
  display: flex;
}
</style>

<script>
import Form from "../components/Form.vue";
import data from "../data/db";

const { ages, civilStatus, nationalities } = data;

export default {
  name: "ParentsR",
  data: () => ({
    title: "Registro de los Padres",
    subtitle: "Registro Civil",
    ages,
    civilStatus,
    nationalities,
  }),
  components: {
    Form,
  },
};
</script>
