<template>
  <div class="col" v-for="p in bd" v-bind:key="p.id">
    <div class="card m-2">
      <div class="card-header">
        <span class="h3">{{p.nombre}}</span>
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
export default {
  name: "PxCard",
  data() {
    return {
      bd: [
        {
          id: "1",
          version: "v1",
          precio: 33.3,
          fecha: "12-02-2022",
          tipo: "pagina web",
          estado: "terminado",
          consumo: 9,
          descripcion: "Este es un sitio web para la publicidad",
          imagen: "./logo.png",
          nombre: "Sitio web",
        },
        {
          id: "2",
          version: "v1",
          precio: 89.3,
          fecha: "12-02-2022",
          tipo: "Sistema de informacion",
          estado: "terminado",
          consumo: 5,
          descripcion: "Este sitema es chido",
          imagen: null,
          nombre: "Sistema GAED",
        },
        {
          id: "3",
          version: "v1",
          precio: 366.3,
          fecha: "12-02-2022",
          tipo: "Prototipo",
          estado: "terminado",
          consumo: 9,
          descripcion: "Este prototipo es para cualquier tienda en general",
          imagen: null,
          nombre: "General system",
        },
        {
          id: "4",
          version: "v1",
          precio: 113.3,
          fecha: "12-02-2022",
          tipo: "APP MOVIL",
          estado: "terminado",
          consumo: 9,
          descripcion: "Esta app movil es para administrar la bd de un S.I.",
          imagen: null,
          nombre: "ADMIN DB",
        },
      ],
    };
  },
};
</script>
