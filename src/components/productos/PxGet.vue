<template>
    <div class="row">
      <div class="col" v-for="p in productos" v-bind:key="p.id">
        <div class="card m-1 bg-primary">
          <div class="card-header bg-dark text-white">
            <span class="h3">{{ p.nombre }}</span>
          </div>
          <div class="card-body">
            <div></div>
            <div>
              <ul class="list-group list-group-flush m-1">
                <li class="list-group-item"><strong>Id: </strong>{{ p.id }}</li>
                <li class="list-group-item">
                  <strong>Precio: </strong>{{ p.precio }}
                </li>
                <li class="list-group-item">
                  <strong>Tipo: </strong>{{ p.tipo }}
                </li>
                <li class="list-group-item">
                  <strong>Consumo: </strong>{{ p.consumo }}
                </li>
                <li class="list-group-item">
                  <strong>Versión: </strong>{{ p.version }}
                </li>
                <li class="list-group-item">
                  <strong>Fecha: </strong>{{ p.fecha }}
                </li>
                <li class="list-group-item">
                  <strong>Estado: </strong>{{ p.estado }}
                </li>
                <li class="list-group-item">
                  <strong>Descripción: </strong>{{ p.descripcion }}
                </li>
              </ul>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger me-3" v-on:clik="delete '1'">
                Eliminar
              </button>
              <button class="btn btn-warning">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
</template>
<script>

export default {
    name:'PxGet',
    data() {
    return {
      productos: [],
    };
  },
  
  bdProducto: null,
  created() {
    
  },
  mounted() {
    fetch('http://localhost:8090/producto/')
    .then((res)=> res.json())
    .then(data => this.productos = data)
    .catch(err => console.log(err.message))
  },
  methods: {},
}
</script>