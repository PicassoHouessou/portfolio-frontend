<i18n>{
    "fr": {
        "Prévisualisation": "Prévisualisation"
    },
    "en": {
        "Prévisualisation": "Preview"
    }
}
</i18n>

<template>
  <!-- Start Breadcrumb
 ============================================= -->
  <div class="breadcrumb-area shadow dark bg-cover text-center text-light" style="background-image: url(assets/img/2440x1578.png);">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <h1>{{ t("Prévisualisation") }}</h1>
          <ul class="breadcrumb">
            <li><NuxtLink href="/"><i class="fas fa-home"></i> {{ t("Accueil") }}</NuxtLink></li>
            <li>{{ t("Projet") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End Breadcrumb -->

  <!-- Star Services Details Area
  ============================================= -->
  <div class="services-details-area default-padding max-height">
    <div class="container-fluid p-0 m-0 max-height">
      <iframe class="iframe" :src="url" frameborder="0" width="100%" height="auto" loading="eager"  @loadstart="onLoad"></iframe>
    </div>
  </div>
  <!-- End Services Details Area -->

</template>
<style lang="scss" scoped>
.portfolio-view {
    margin-bottom: 10px;
}

</style>
<script setup lang="ts">
const {locale, t} = useI18n({
  inheritLocale: true
});
const route= useRoute()

const url= ref(route.params.url as string ??"");

watchEffect(()=>{
  const urlParam = route.params.url;
  if(urlParam){
    url.value = urlParam as string
  }
});
const  onLoad=(frame:any)=> {
};
</script>
<style scoped>
.breadcrumb-area{
  padding-top: 20px!important;
  padding-bottom: 20px!important;
}

.default-padding{
  padding-top:5px!important;
  padding-bottom:0!important;
  margin: 0!important;
}
.max-height{
  height: 800px!important;
  margin-bottom: 0!important;
  margin-top: 0!important;
}
.iframe{
  min-height: 800px;
  height: max-content!important;
}


</style>
