<template>
  <div>
    <px-carousel />
  </div>
  <div class="container mt-3">
    <span class="h2">Sistemas Más Demandados</span>
    <div class="row">
      <px-card />
    </div>
    <px-jumbo />
  </div>
</template>
<script>
import PxCard from "@/components/user/PxCard.vue";
import PxJumbo from "@/components/user/PxJumbo.vue";
import PxCarousel from "@/components/home/PxCarousel.vue";
export default {
  components: { PxCard, PxJumbo, PxCarousel },
  name: "viewHome",
};
</script>
