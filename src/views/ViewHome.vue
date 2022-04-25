<template>
  <div>
    <px-carousel />
  </div>
  <div class="container mt-3">
    <div id="sitio-web">
      <span class="h2">Sistemas Más Demandados </span>
      <router-link to="/">Ver más.</router-link>
      <div>
        <px-card tipo="1"/>
      </div>
    </div>
    <div id="sitio-web">
      <span class="h2">Sitios Webs Más Demandados </span>
      <router-link to="/">Ver más.</router-link>
      <div class="row">
        <px-card tipo="2"/>
      </div>
    </div>
    <div id="sitio-web">
      <span class="h2">Prototipos Más Demandados </span>
      <router-link to="/">Ver más.</router-link>
      <div class="row">
        <px-card tipo="3"/>
      </div>
    </div>
    <div id="sitio-web">
      <span class="h2">Apps Movil Más Demandadas </span>
      <router-link to="/">Ver más.</router-link>
      <div class="row">
        <px-card tipo="4"/>
      </div>
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
