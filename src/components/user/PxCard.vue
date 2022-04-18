<template>
  <div class="col" v-for="p in productos" v-bind:key="p.id">
    <div class="card m-2">
      <div class="card-header">
        <img src="./logo.png" :alt="p.nombre" />
      </div>
      <div class="card-body center">
        <span class="h5">{{ p.nombre }}</span>
        <p>{{ p.descripcion }}</p>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <input type="submit" value="Más Información" class="btn btn-primary" />
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
