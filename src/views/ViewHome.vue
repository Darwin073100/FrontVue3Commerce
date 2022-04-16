<template>
    <div class="container">
        <span class="h2">Contenido Mas Popular</span>
        <div class="row">
            <px-card/>
        </div>
        <px-jumbo/>
    </div>
</template>
<script>
import PxCard from '@/components/user/PxCard.vue';
import PxJumbo from '@/components/user/PxJumbo.vue';
export default {
  components: { PxCard, PxJumbo },
    name:'viewHome',
}
</script>