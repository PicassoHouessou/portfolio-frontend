<template>
  <select class="form-select" v-model="language">
    <option
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === "object" ? item.name : item }}
    </option>
  </select>

</template>
<style scoped>
.form-select{
  border:0;
  border-radius: 0;/*
padding-left: 0!important;
  padding-right: 0!important;*/
}
</style>
<script setup lang="ts">
import { watch } from 'vue'
const { locales, locale, setLocale } = useI18n();
import {useLocaleStore} from "~/stores/locale";
const store = useLocaleStore();

watch(locale, async () => {
  store.updateLocale(locale.value)
})

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

