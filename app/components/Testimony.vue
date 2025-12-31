
<template>
  <!-- Start Testimonials
============================================= -->
  <div class="testimonial-area default-padding">

    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="site-heading text-center">
            <h4 class="sub-title">{{ t("Mon Expertise") }}</h4>
            <h2 class="title">{{ "Avis des partenaires" }}</h2>
            <div class="devider"/>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="testimonial-style-one-box text-center">
        <div class="row align-center">
          <div class="col-lg-8 offset-lg-2">
            <div class="testimonial-style-one-carousel swiper">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Single item -->
                <div class="swiper-slide">
                  <div class="testimonial-style-one">

                    <div v-for="testimony in data" :key="testimony.id"  class="item">

                      <div class="thumb">
                        <img src="/assets/img/team/1.png" alt="Thumb">
                        <div class="shape">
                          <img src="/assets/img/shape/15.png" alt="Shape">
                        </div>
                      </div>
                      <div class="content">
                        <p>
                          “{{ testimony?.content}}”
                        </p>
                      </div>
                      <div class="provider">
                        <div class="info">
                          <h4>{{ testimony?.author}}</h4>
                          <span>{{ testimony?.occupation }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Single item -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- End Testimonails Area -->
</template>

<script setup lang="ts">
//import Swiper from 'swiper/bundle';
defineProps<{
  data: any

}>();

const { t } = useI18n({
    inheritLocale: true
});

/* ==================================================
      # Testimonial Carousel
   ===============================================*/
/*
const testimonial2 = new Swiper(".testimonial-style-one-carousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
*/
</script>