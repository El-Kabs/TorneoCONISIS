<template>
  <div>
    <div>
      <div class="row">
        <div class="column">
          <vs-input class="inputx s" placeholder="Nombre Completo" v-model="nombre"/>
        </div>
        <div class="column">
          <vs-input class="inputx s" placeholder="Puntaje" v-model="puntaje"/>
        </div>
        <div class="column">
          <vs-button class="s d" color="success" type="border">Agregar</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agregar"
};
</script>

<style scoped>
.s{
  margin-left: 25%;
  margin-right: 20%;
}
.d{
  margin-left: 50%!important;
}
</style>
