<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GAED</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page"  to="/">INICIO</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PEDIDO</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Sitios Web</a></li>
            <li><a class="dropdown-item" href="#">Sistemas De Información</a></li>
            <li><a class="dropdown-item" href="#">Sistemas De Información</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Todo</a></li>
          </ul>
        </li>
      </ul>
      <div id="LOGIN" class="d-flex m-3">
        <router-link class="me-2" to="/registro">Registrate</router-link>
        <router-link to="/login">Inicia Sesión</router-link>
      </div>
      <form class="d-flex">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-dark" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</header>
</template>
<script>
export default {
  
    name: 'PxHeader',
    data(){
        return{
          nav:[
            {name: 'INICIO', url: '#'},
            {name: 'INICIO', url: '#'},
            {name: 'INICIO', url: '#'}
          ]
        }
    }
}
</script>
<style scoped>

</style>