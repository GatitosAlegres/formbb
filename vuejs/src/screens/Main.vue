<template lang="html">
  <div class="ui raised very padded text container segment card card-header" id="cardpreview">
    <h2 class="ui center aligned disabled header">
      <small> Registro de nacimiento </small>
    </h2>
    <div class="index-header">
      <router-link to="/">
        <button class="large ui button green" id="btn-iniciar"            onclick="clickListener">>
          Iniciar
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
const cardInitial = document.querySelector("#cardpreview");
const btnIniciar = document.querySelector("#btn-iniciar");

const clickListener = () => {
  cardInitial.style.display = 'none'
  console.log('click')
};

if(btnIniciar){
  btnIniciar.addEventListener('click', clickListener)
}

export default {
  name: "GeneralData",
  data: () => ({}),
  methods: {clickListener},
};
</script>
<style lang="css">
.index-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ocultar {
  margin: 50%;
}

.card-header {
  margin-top: 5rem !important;
}
</style>
