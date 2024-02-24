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
    <div>
        <NavBar></NavBar>
        <!-- <div class="hero-wrap js-fullheight">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                    <div class="col-lg-10 ftco-animate d-flex align-items-center">
                        <div class="text text-center">
                            <h1 class="mb-3 bread">Blog Single Post</h1>
                            <p class="breadcrumbs"><span class="mr-2"><router-link :to="{name: 'Home' }">Accueil <i class="ion-ios-arrow-forward"></i></router-link></span> <span class="mr-2"><router-link :to="{ name: 'Contact'}">Blog <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Contact Me <i class="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!--

          <section class="ftco-section portfolio-view " >
              <div class="container-fluid px-md-0">
                  <div class="row no-gutters justify-content-center pb-5">
                      <div class="col-md-12">
          <iframe :src="url" frameborder="0" width="100%" height="800"></iframe>
                      </div>
                  </div>
              </div>
          </section>
          -->


        <section class="ftco-section ftco-project" id="portfolio-view">
            <div class="container-fluid px-md-0">
                <div class="row no-gutters justify-content-center">
                    <div class="col-md-12 heading-section text-center ftco-animate">
                        <h1 class="big big-2">{{ t("Prévisualisation") }}</h1>
                        <h2 class="mb-4">{{ t("Prévisualisation") }}</h2>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-12" :class="{'d-flex justify-content-center align-items-center': isLoading}">
                        <Loader v-if="isLoading" />

                        <iframe :src="url" frameborder="0" width="100%" height="800" loading="eager" v-show="!isLoading" @load="onLoad"></iframe>
                        <!--
                                            <vue-iframe
                                                :src="url"
                                                @load="onLoad"
                                                width="100%"
                                                height="800px"
                                            /> -->
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<style lang="scss" scoped>
.portfolio-view {
    margin-bottom: 10px;
}

</style>
<script>
import Footer from "./../components/Footer.vue";
import NavBar from "./../components/NavBar.vue";
import {useI18n} from "vue-i18n";

import Loader from "../components/Loader";


export default {
    components: {
        Footer,
        NavBar,
        Loader
    },
    setup() {
        const {locale, t} = useI18n({
            inheritLocale: true
        });
        return {t};
    },
    data() {
        return {
            isLoading: true
        }
    },
    props: ['url'],
    methods: {
        onLoad(frame) {
            this.isLoading = false ;

            //this.myIframe = frame.contentWindow

        }
    }
}
</script>
<style scoped>
#portfolio-view {
    margin-top: 20px !important;
}
</style>