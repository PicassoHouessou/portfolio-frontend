import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueCookies from 'vue3-cookies';
import { createI18n } from 'vue-i18n';
//import {SUPPORT_LOCALES, setI18nLanguage, loadLocaleMessages} from "./i18n";
//import { setupI18n } from "./i18n.js";

import en from './../locales/en.json'
import fr from './../locales/fr.json'




const options = {
    color: '#3d64ff',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false,
    autoFinish: false
}

const i18n = createI18n({
    locale: 'fr', // set locale
    legacy: true,
    fallbackLocale: 'fr', // set fallback locale
    globalInjection: true,
   messages : {
        "fr":fr,
       "en":en

   }

})

//i18n.global.locale = 'en';
/*

const locale =  'fr';
const i18n = setupI18n({
    locale: 'fr', // set locale
    legacy: true,
    fallbackLocale: 'fr', // set fallback locale
    globalInjection: true,
    messages : {
        "fr":fr,
        "en":en

    }
    // something vue-i18n options here ...
});

// navigation guards
router.beforeEach(async (to, from, next) => {
    const paramsLocale = to.params.locale

    // use locale if paramsLocale is not in SUPPORT_LOCALES
    console.log(paramsLocale)
    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
        return next(`/${locale}`)
    }

    // load locale messages
    if (!i18n.global.availableLocales.includes(paramsLocale)) {
        await loadLocaleMessages(i18n, paramsLocale)
    }

    // set i18n language
    setI18nLanguage(i18n, paramsLocale)

    return next()
})
*/
const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.use(VueProgressBar, options )
app.use(VueCookies)

app.mount("#app");
