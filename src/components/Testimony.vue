<i18n>{
    "fr": {
        "message": "En cours de chargement..."

    },
    "en": {
        "message": "Loading..."
    }
}
</i18n>
<template>
    <div>

        <div class="loader"></div>
        <p class="m-2 text-center">{{ t("message") }}</p>
    </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { locale, t } = useI18n({
    inheritLocale: true
});

</script>

<style lang="scss" scoped>

@keyframes rotate-loader {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}

.loader {
    padding: 100px;
    border: 6px solid blue;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotate-loader 1s infinite linear;
    height: 0;
    width: 0;
}
</style>