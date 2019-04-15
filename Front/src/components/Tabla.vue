<template>
  <div>
    <vs-table :data="ranking">
      <template slot="header">
        <h3>Ranking - Dinosaurio de Chrome</h3>
      </template>
      <template slot="thead">
        <vs-th>Nombre</vs-th>
        <vs-th>Puntaje</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr v-bind:key="key" v-for="(value, key, i) in data">
          <vs-td :data="key">{{i+1}}. {{key}}</vs-td>

          <vs-td :data="value">{{value}}</vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>
<script>
export default {
  name: "Tabla",
  data() {
    return {
      ranking: Object
    };
  },
  mounted: function() {
    const _this = this;
    fetch("http://localhost:3010/api/tablaDinosaurio", {
      method: "GET"
    })
      .then(res => res.text())
      .then(json => {
        const parsed = JSON.parse(json.replace(/'/g, '"'));
        _this.ranking = parsed;
      });
  }
};
</script>
<style scoped>
</style>
