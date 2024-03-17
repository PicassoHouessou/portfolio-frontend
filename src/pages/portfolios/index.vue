<template>
    <div>
        <Portfolio/>
    </div>

</template>
<style lang="scss" scoped>

</style>
<script setup lang="ts">
import Portfolio from "../../components/Portfolio.vue";
import {useI18n} from "vue-i18n";
import type {Post} from "~/models/Post";
import {generateUrl} from "~/js/utils";
import {ApiRoutesWithoutPrefix} from "~/js/constant";

const userId = 2
const { data:posts, pending, error, refresh } = await useApi<Array<Post>>(generateUrl(`${ApiRoutesWithoutPrefix.POSTS}`,{
  author:userId,
  "type.name":"project",
  isEnabled:true,itemsPerPage:10
}));


const { locale,locales, t } = useI18n({
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