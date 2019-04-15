<template>
  <div>
    <Tabla/>
  </div>
</template>

<script>
import Tabla from "../components/Tabla";
export default {
  name: "home",
  components: {
    Tabla
  },
  mounted: function(){
    const _this = this;
    fetch("http://localhost:3010/api/tablaDinosaurio", {
      method: "GET"
    }).then(res => res.text()).then(json=>{
      const parsed = JSON.parse(json.replace(/'/g, '"'));
      _this.ranking = parsed;
    });
  },
  data(){
    return{
      ranking: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
