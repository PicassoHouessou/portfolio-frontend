<i18n xmlns="http://www.w3.org/1999/html">
{
    "fr": {
        "La page que vous demandée semble introuvable": "La page que vous demandée semble introuvable",
        "Retour à l'accueil": "Retour à l'accueil"
    },
    "en": {
        "La page que vous demandée semble introuvable": "The page you requested cannot be found",
        "Retour à l'accueil": "Back to home page"
    }
}
</i18n>
<template>
    <div>
        <NavBar/>

        <section id="portfolio-view" class="ftco-section ftco-project">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-7 ftco-animate text-center">
                    <h2>{{ t("La page que vous demandée semble introuvable") }}</h2>
                    <p class="mb-0">
                        <router-link
:to="{name: 'index' } "
                                     class="btn btn-primary py-3 px-5">{{ t("Retour à l'accueil") }}
                        </router-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import {useI18n} from "vue-i18n";
export default {
    name: "NotFound",
    components: {
        NavBar
    },
    setup() {
        const {locale, t} = useI18n({
            inheritLocale: true
        });
        return {t};
    }
}
</script>

<style scoped>

</style>