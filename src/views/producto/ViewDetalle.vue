<template>
  <div class="container bg-white">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="imagenes[0]" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="imagenes[1]" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="imagenes[2]" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row">
      <div class="card col m-2">
        <span class="h2">{{ producto.nombre }}</span>
        <span class="display-5"> {{ producto.precio }} MXN$ </span>
        <span class="text-success">IVA Incluido</span>
        <span><strong>Tipo de software: </strong>{{producto.tipo}}</span>
        <span><strong>Versión: </strong>{{producto.version}}</span>
        <span><strong>Fecha de publicación: </strong>{{producto.fecha}}</span>
      </div>
      <div class="card col m-2">
          <div class="text-center h4">
              <span>Detalles de la compra</span>
          </div>
          <span>Estado del doftware {{producto.estado}}</span>
          <button class="btn btn-primary">Comprar Ahora</button>
          <button class="btn btn-outline-success mt-1">Agregar Al Carrito</button>
          <span class="text-secondary"><img src="https://pic.sopili.net/pub/emoji/noto-emoji/png/128/emoji_u2714.png" width=20 height=20>Compra protegida verifica su funcionamiento y se realiza la compra</span>
      </div>
    </div>
    <div class="row">
        <div class="card m-2 p-0 col-3">
            <div class="card-header d-flex justify-content-center text-success">
                <span class="h4">Numero de Ventas</span>
            </div>
            <div class="card-body text-center text-primary">
                <span class="display-4"># {{producto.consumo}}</span>
            </div>
        </div>
        <div class="card m-2 col">
            <div class="card-header d-flex justify-content-center">
                <span class="h4">Descripcion del Software</span>
            </div>
            <div class="card-body">
                {{producto.descripcion}}
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BDProducto from "@/services/BDProducto";
export default {
  name: "ViewDetalle",
  data() {
    return {
      id: this.$route.params.id,
      producto: [],
      imagenes: [
        require("@/assets/carousel1.png"),
        require("@/assets/carousel2.png"),
        require("@/assets/carousel3.png"),
      ],
    };
  },
  bdProducto: null,
  created() {
    this.bdProducto = new BDProducto();
  },
  mounted() {
    this.bdProducto
      .getOne(this.id)
      .then((res) => res.json())
      .then((data) => (this.producto = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
.c {
  widows: 10px;
  height: 100px;
}
</style>
