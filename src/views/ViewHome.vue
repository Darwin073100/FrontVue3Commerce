<template>
    <div class="container">
        <span class="h2">Contenido Mas Popular</span>
        <div class="row">
            <px-card/>
        </div>
    </div>
</template>
<script>
import PxCard from '@/components/user/PxCard.vue';
export default {
  components: { PxCard },
    name:'viewHome',
}
</script>