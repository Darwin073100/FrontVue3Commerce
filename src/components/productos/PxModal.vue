<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Registrar Un Producto
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="staticBackdropLabel">Formulario</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="txtId">Id:</label>
              <input
                class="form-control"
                type="text"
                name=""
                id="txtId"
                v-model="producto.id"
              />
              <label for="txtNombre">Nombre:</label>
              <input
                class="form-control"
                type="text"
                id="txtNombre"
                v-model="producto.nombre"
              />
              <label for="txtTipo">Tipo De Software:</label>
              <select class="form-control" id="txtTipo" v-model="producto.tipo">
                <option value="Sitio Web"><strong>Sitio Web</strong></option>
                <option value="S. De Información"><strong>S. De Información</strong></option>
                <option value="App Movil"><strong>App Movil</strong></option>
                <option value="Prototipo"><strong>Prototipo</strong></option>
              </select>
              <label for="txtEstado">Estado:</label>
              <input
                class="form-control"
                type="text"
                id="txtEstado"
                v-model="producto.estado"
              />
              <label for="txtPrecio">Precio:</label>
              <input
                class="form-control"
                type="number"
                id="txtPrecio"
                v-model="producto.precio"
              />
              <label for="txtConsumo">Consumo:</label>
              <input
                class="form-control"
                type="number"
                id="txtConsumo"
                v-model="producto.consumo"
              />
              <label for="txtFecha">Fecha:</label>
              <input
                class="form-control"
                type="date"
                id="txtFecha"
                v-model="producto.fecha"
              />
              <label for="txtVersion">Versión:</label>
              <input
                class="form-control"
                type="text"
                id="txtVersion"
                v-model="producto.version"
              />
              <label for="txtDescripcion">Descripción:</label>
              <textarea
                class="form-control"
                id="txtDescripcion"
                cols="30"
                rows="5"
                v-model="producto.descripcion"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Salir
            </button>
            <input
              type="button"
              class="btn btn-primary"
              v-on:click="save()"
              value="Guardar"
              data-bs-dismiss="modal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BDProducto from "@/services/BDProducto";
export default {
  name: "PxModal",
  data() {
    return {
      producto: {
        id: null,
        nombre: null,
        tipo: null,
        estado: null,
        precio: null,
        consumo: null,
        fecha: null,
        version: null,
        descripcion: null,
      },
    };
  },
  bdProducto: null,
  created() {
    this.bdProducto = new BDProducto();
  },
  methods: {
    save() {
      this.bdProducto.save(this.producto)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    getAll(){
      fetch('http://localhost:8090/producto/')
    .then((res)=> res.json())
    .then(data => this.productos = data)
    .catch(err => console.log(err.message))
    }
  },
};
</script>
