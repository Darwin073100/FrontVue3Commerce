<template>
   <div class="container center">
        <div class="row">
            <div class="col-6">
                <span class="h1 text-danger">ERROR 404</span>
                <span>Esta página no existe.</span>
                <router-link to="/">Volver al inicio</router-link>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    name: 'ViewError'
}
</script>