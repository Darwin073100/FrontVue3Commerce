<template>
  <div class="text-center">
    <sPan class="h1">Sección De Productos</sPan>
    <div>
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Registrar Un Producto
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="staticBackdropLabel">Formulario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="txtId">Id:</label>
          <input class="form-control" type="text" name="" id="txtId">
          <label for="txtNombre">Nombre:</label>
          <input class="form-control" type="text" id="txtNombre">
          <label for="txtTipo">Tipo De Software:</label>
          <select class="form-control" id="txtTipo">
            <option value="1"><strong>Sitio Web</strong></option>
            <option value="2"><strong>S. De Información</strong></option>
            <option value="2"><strong>App Movil</strong></option>
            <option value="2"><strong>Prototipo</strong></option>
          </select>
          <label for="txtEstado">Estado:</label>
          <input class="form-control" type="text" id="txtEstado">
          <label for="txtImagen">Imagen:</label>
          <input class="form-control" type="file" id="txtImagen">
          <label for="txtPrecio">Precio:</label>
          <input class="form-control" type="number" id="txtPrecio">
          <label for="txtConsumo">Consumo:</label>
          <input class="form-control" type="number" id="txtConsumo">
          <label for="txtFecha">Fecha:</label>
          <input class="form-control" type="date" id="txtFecha">
          <label for="txtVersion">Versión:</label>
          <input class="form-control" type="text" id="txtVersion">
          <label for="txtDescripcion">Descripción:</label>
          <textarea class="form-control" id="txtDescripcion" cols="30" rows="5"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="container">
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
  </div>
</template>
<script>
import BDProducto from "../../services/BDProducto";
export default {
  name: "ViewProd",
  data() {
    return {
      productos: null,
      modalShow: false
    };
  },
  bdProducto: null,
  created() {
    this.bdProducto = new BDProducto();
  },
  mounted() {
    this.bdProducto.getAll().then((data) => {
      this.productos = data.data;
      console.log(data);
    });
  },
  methods: {},
};
</script>
