<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/carousel1.png" class="d-block w-100 imgMed" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h5>imagen 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui eveniet quisquam? Quae, consequuntur suscipit doloremque tempore possimus consectetur incidunt, iste, nam autem asperiores reiciendis neque a quisquam. Molestiae, obcaecati.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/carousel2.png" class="d-block w-100 imgMed" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h5>imagen 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui eveniet quisquam? Quae, consequuntur suscipit doloremque tempore possimus consectetur incidunt, iste, nam autem asperiores reiciendis neque a quisquam. Molestiae, obcaecati.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/carousel3.png" class="d-block w-100 imgMed" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h5>imagen 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui eveniet quisquam? Quae, consequuntur suscipit doloremque tempore possimus consectetur incidunt, iste, nam autem asperiores reiciendis neque a quisquam. Molestiae, obcaecati.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/carousel2.png" class="d-block w-100 imgMed" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h5>imagen 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui eveniet quisquam? Quae, consequuntur suscipit doloremque tempore possimus consectetur incidunt, iste, nam autem asperiores reiciendis neque a quisquam. Molestiae, obcaecati.</p>
          </div>
        </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "PxCarousel",
  data() {
    return {
      carousel: [
        {
          img: require("@/assets/carousel1.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.imgMed {
  height: 25rem;
}
</style>
