<template>
  <div class="breadcrumb-area shadow dark bg-cover text-center text-light" style="background-image: url(assets/img/2440x1578.png);">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <h1>{{ t("Mes Projets") }}</h1>
          <ul class="breadcrumb">
            <li><NuxtLink href="/"><i class="fas fa-home"></i> {{ t("Accueil") }}</NuxtLink></li>
            <li>{{ t("Projets") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
<div class="default-padding">
  <Portfolio/></div>

</template>
<style lang="scss" scoped>

</style>
<script setup lang="ts">
import Portfolio from "../../components/Portfolio.vue";
import {useI18n} from "vue-i18n";

const {  t } = useI18n({
  inheritLocale: true
});

useHead({
            title: "Picasso Houessou | Portfolio",
            meta: [
                {
                    name: `description`,
                    content: t("head.description"),
                }
            ],
        });
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