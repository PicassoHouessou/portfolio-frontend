<i18n>{
    "fr": {
        "Accueil": "Accueil",
        "Mes Projets": "Mes Projets",
        "Quelques réalisations de Picasso": "Quelques réalisations de Picasso"
    },
    "en": {
        "Accueil": "Home",
        "Mes Projets": "My Projects",
        "Quelques réalisations de Picasso": "Some of Picasso's achievements"
    }
}
</i18n>
<template>
    <section class="ftco-section ftco-project" id="projects-section">
        <div class="container-fluid px-md-0">
            <div class="row no-gutters justify-content-center pb-5">
                <div class="col-md-12 heading-section text-center ftco-animate">
                    <h1 class="big big-2">{{ $t("Accueil") }}</h1>
                    <h2 class="mb-4">{{ $t("Mes Projets") }}</h2>
                    <p>{{ $t("Quelques réalisations de Picasso") }}</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-4" v-for="portfolio in portfolios" :key="portfolio.url">
                    <PortfolioItem :title="portfolio.title" :url="portfolio.url" :category="portfolio.category"
                                   :image="portfolio.image"/>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import portfolios from "../js/portfolio";

import PortfolioItem from "./PortfolioItem.vue";

export default {
    name: "Portfolio",
    components: {
        PortfolioItem
    },
    data() {
        return {
            portfolios
        }
    }
}
</script>

<style scoped>

</style>