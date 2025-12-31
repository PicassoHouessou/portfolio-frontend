import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: "fr",
    globalInjection: true,
    messages: {
        fr: fr,
        en: en,
    },
}))
