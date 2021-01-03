<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <b-carousel id="carousel1" controls indicators>
            <!-- Text slides with image -->
            <b-carousel-slide img-src="img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
        </b-carousel>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
