<template>
  <div class="text-center">
    <span class="h1">Sección De Productos</span>
    <px-modal />
  </div>
  <div class="container">
    <px-get></px-get>
  </div>
</template>
<script>
import BDProducto from "@/services/BDProducto";
import PxModal from "@/components/productos/PxModal.vue";
import PxGet from "@/components/productos/PxGet.vue";
export default {
  name: "ViewProd",
  data() {
    return {
      productos: null,
    };
  },
  components: {
    PxModal,
    PxGet,
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
  methods: {},
};
</script>
