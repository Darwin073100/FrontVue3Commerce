<template>
   <div class="container text-center">
        <div class="row">
            <div class="col mt-5">
                <span class="h1 text-danger">ERROR 404</span>
                <br>
                <span>Esta página no existe.</span>
                <br>
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