<i18n>
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
        <NavBar></NavBar>
        <div class="container h-100 mt-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-7 ftco-animate text-center">
                    <h2>{{ $t("La page que vous demandée semble introuvable") }}</h2>
                    <p class="mb-0">
                        <router-link :to="{name: 'Home' } "
                                     class="btn btn-primary py-3 px-5">{{ $t("Retour à l'accueil") }}
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
export default {
    name: "NotFound",
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>