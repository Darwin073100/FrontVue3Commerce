<template>
  <div class="col" v-for="p in productos" v-bind:key="p.id">
    <div class="card m-2">
      <div class="card-header">
        <span class="h3">{{ p.nombre }}</span>
      </div>
      <div class="card-body center">
        <img src="./logo.png" :alt="p.nombre" />
      </div>
      <div class="card-footer">
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
    this.bdProducto.getAll().then((data) => {
      this.productos = data.data;
    });
  },
};
</script>
