<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <div class="card">
        <div class="card-header text-center">
          <span class="h2">Registro</span>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="row">
              <div class="col-md-5 col-lg-6 col-xl-6">
                <label for="txtNombre"><strong>Nombre:</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cliente.nombre"
                  id="txtNombre"
                />
                <label><strong>Apellidos:</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cliente.apellidos"
                />
                <label for=""><strong>Correo Electronico:</strong></label>
                <input
                  type="email"
                  class="form-control"
                  v-model="cliente.email"
                />
                <label for=""><strong>Nombre De Usuario:</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="usuario.userName"
                />
                <label for=""><strong>Contraseña:</strong></label>
                <input type="password" class="form-control" />
                <label for=""><strong>Confirma Tu Contraseña:</strong></label>
                <input
                  type="password"
                  class="form-control"
                  v-model="usuario.password"
                />
              </div>
              <div class="col-md-5 col-lg-6 col-xl-6">
                <label for=""><strong>Clave De Tu País:</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cliente.clave"
                />
                <label for=""><strong>Telefono:</strong></label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="cliente.telefono"
                />
                <label for=""><strong>Direccion</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cliente.direccion"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-primary" v-on:click="save()">
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BDCliente from "@/services/BDCliente";
import BDUser from "@/services/BDUser";
export default {
  name: "ViewRegistro",
  data() {
    return {
      cliente: {
       // id: null,
        nombre: null,
        apellidos: null,
        email: null,
        clave: null,
        telefono: null,
        noCompras: 0,
        direccion: null,
        idUser: null,
      },
      usuario: {
        //id: null,
        tipo: "CLIENTE",
        userName: null,
        password: null,
      },
    };
  },
  bdCliente: null,
  bdUser: null,
  created() {
    this.bdCliente = new BDCliente();
    this.bdUser = new BDUser();
  },

  methods: {
    save() {
      this.bdCliente.save(this.cliente)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        this.bdUser.save(this.usuario)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
