<template>
  <div class="col-md-4 col-lg-3 col-xl-3" v-for="p in productos" v-bind:key="p.id">
    <div class="card m-2 border">
      <div class="card-header bg-dark">
        <img src="./logo.png" :alt="p.nombre" />
        <span class="bg-info">{{p.precio}} MXN$</span>
      </div>
      <div class="card-body text-center bg-primary">
        <span class="h5">{{ p.nombre }}</span>
        <p>{{ p.descripcion }}</p>
      </div>
      <div class="card-footer d-flex justify-content-center bg-dark">
        <router-link to="detalle" class="btn btn-primary">Más Información</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import BDProducto from "../../services/BDProducto";
export default {
  name: "PxCard",
  data() {
    return {
      productos: null,
    };
  },
  bdProducto: null,
  created() {
    this.bdProducto = new BDProducto();
  },
  mounted() {
    this.bdProducto.getAll().then((res)=> res.json())
        .then(data => this.productos = data)
        .catch(err => console.log(err.message))
  },
};
</script>
<style scoped>
.border{
  border: none;
  box-shadow: 0 0 15px rgb(46, 46, 46);
}
</style>
