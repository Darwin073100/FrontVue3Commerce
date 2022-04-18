<template>
    <div class="container mt-5 ">
        <div class="card">
            <div class="card-header text-center">
                <span class="h2">Inicio De Sesión</span>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Nombre de usuario:</label>
                    <input type="text" class="form-control">
                    <label>Contraseña:</label>
                    <input type="password" class="form-control">
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Acceder</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ViewLogin'
}
</script>