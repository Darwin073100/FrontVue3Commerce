<template>
     <div class="">
       <px-header/>
     <router-view/>
     </div>
</template>

<script>
import PxHeader from './components/PxHeader.vue'

export default {
  name: 'App',
  components: {
    PxHeader

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color: green;
}
</style>
