<template>
    <div class="pt-5 pb-5">
        <div class="container">
        <div class="card">
            <div class="card-header text-center">
                <span class="h2">Registro</span>
            </div>
            <div class="card-body">
                <div class="form-group row">
                    <div class="col">
                        <label for=""><strong>Nombre:</strong></label>
                        <input type="text" class="form-control">
                        <label><strong>Apellidos:</strong></label>
                        <input type="text" class="form-control">
                        <label for=""><strong>Correo Electronico:</strong></label>
                        <input type="email" class="form-control">
                    </div>
                    <div class="col">
                        <label for=""><strong>Clave De Tu País:</strong></label>
                        <input type="text" class="form-control">
                        <label for=""><strong>Telefono:</strong></label>
                        <input type="tel" class="form-control">
                        <label for=""><strong>Direccion</strong></label>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Registrar</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'ViewRegistro'
}
</script>