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

  <!--
  <div class="dropdown">
              <button class="btn btn-outline-light dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {{ locale }}
              </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li class="dropdown-item" v-for="locale in locales" :key="locale.code">
        <span>
      <NuxtLink  :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </NuxtLink>
          </span>
      </li>
    </ul>
  </div>
  -->


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
const store = useLocaleStore()
store.updateLocale(locale.value)

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

