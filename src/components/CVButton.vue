
<template>
  <a :class="props.class" :href="config.public.baseURL+'/cv/download'"
     @click.prevent="downloadMyCv(config.public.baseURL+'/cv/download',locale)">{{ t("Télécharger mon CV") }}</a>

</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { locale, t } = useI18n({
  inheritLocale: true
});

const props = defineProps({
  class: {
    type: String,
    default: ""
  },
})

const downloadMyCv = async (url: string, locale: string = "en" ): Promise<void> => {
  try {
    const { data: response} = await useApi<Blob>(url + `?lang=${locale}`, {
      responseType: "blob"
    });
    if (response.value){
      const blob = new Blob([await response.value.arrayBuffer()], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = t("Mon CV"); // Assuming $t is your translation function
      link.click();
      URL.revokeObjectURL(link.href);
    }else{
      throw new Error(t("Fichier indisponible"))
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
