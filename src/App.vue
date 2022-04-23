<template>
  <div class="">
    <px-header />
    <router-view />
    <px-footer/>
  </div>
</template>

<script>
import PxFooter from "./components/PxFooter.vue";
import PxHeader from "./components/PxHeader.vue";

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter,
  },
};
</script>

<style></style>
