<template>
    <div>
        <NavBar></NavBar>
        <!--
                <div class="hero-wrap js-fullheight">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div class="col-lg-10 ftco-animate d-flex align-items-center">
                                <div class="text text-center">
                                    <h1 class="mb-3 bread">Blog Single Post</h1>
                                    <p class="breadcrumbs"><span class="mr-2"><router-link :to="{name: 'Home' }">Home <i class="ion-ios-arrow-forward"></i></router-link></span> <span class="mr-2"><router-link :to="{ name: 'Contact'}">Blog <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Contact Me <i class="ion-ios-arrow-forward"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

        <Portfolio/>
        <Footer></Footer>
    </div>

</template>
<style lang="scss" scoped>

</style>
<script>

import Portfolio from "../components/Portfolio.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import {useHead} from "@vueuse/head";
import {useI18n} from "vue-i18n";

export default {
    components: {
        Portfolio,
        Footer,
        NavBar,
    },
    setup() {
        const { t } = useI18n({
            inheritLocale: true
        })
        useHead({
            title: "Picasso Houessou | Portfolio",
            meta: [
                {
                    name: `description`,
                    content: t("head.description"),
                }
            ],
        });
        return{
            t
        }
    }

}
</script>

<i18n>
{
    "fr": {
        "head": {
            "keywords": "Picasso Houessou, Picasso Houessou-Dossou, Développeur web, Développeur backend, développeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, développeur wordpress, développeur PHP, développeur vue.js, création de site web au bénin, web designer au bénin, développeur d'API, création de site web à cotonou, refonte de site web",
            "description": "Voir tous les projets que j'ai réalisé"
        }
    },
    "en": {
        "head": {
            "keywords": "Picasso Houessou, Picasso Houessou-Dossou, Développeur web, Développeur backend, développeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, développeur wordpress, développeur PHP, développeur vue.js, création de site web au bénin, web designer au bénin, développeur d'API, création de site web à cotonou, refonte de site web",
            "description": "Picasso Houessou."
        }
    }
}
</i18n>