<script setup lang="ts">
import type { NuxtError } from '#app';
const {  t } = useI18n({
    inheritLocale: true
});
const props =defineProps({
    // eslint-disable-next-line vue/require-default-prop
    error: Object as () => NuxtError
})

const style = computed(() => ({
     'background-image:': props.error?.statusCode === 404 ? "url(assets/error-404.jpg)": "url(assets/error.jpg)"
}))
console.log(style);

const localePath = useLocalePath();
const handleError = () => clearError({ redirect:localePath('/') })
</script>

<template>
    <div>
        <NavBar/>
        <!-- Start Breadcrumb
  ============================================= -->
        <div class="breadcrumb-area shadow dark bg-cover text-center text-light" :style="style" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h1>{{ t("Erreur") }}</h1>
                        <ul class="breadcrumb">
                            <li><span @click="handleError"><i class="fas fa-home"/> {{ t ("Accueil") }}</span></li>
                            <li>{{ error?.statusCode }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->

        <!-- Start 404
        ============================================= -->
        <div class="error-page-area text-center default-padding">
            <div class="container">
                <div class="row align-center">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="error-box">
                            <h1>{{ error!.statusCode }}</h1>
                            <h2 v-if="error?.statusCode==404">{{ t("Oups ! Cette page est introuvable.") }}</h2>
                            <p v-if="error?.statusCode==404"> {{t("Il se peut que la page que vous recherchez ait été supprimée, que son nom ait été modifié ou qu'elle soit temporairement indisponible.")
                                }}
                            </p>
                            <p v-if="error?.statusCode!==404"> {{t("Une erreur s'est produite. Veuillez réessayer. Si le problème persiste, contactez l'administrateur.")
                                }}
                            </p>
                            <button class="btn mt-20 btn-md circle btn-theme smooth-menu"  @click="handleError">  {{t("Retour à l'accueil")}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End 404 -->
        <Footer/>
    </div>
</template>