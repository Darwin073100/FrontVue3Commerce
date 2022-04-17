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

</style>
