//import { createApp } from "vue";
import { createPinia } from "pinia";

import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
//import router from "./router";
import routes from "./router/routes";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueCookies from "vue3-cookies";
import { createI18n } from "vue-i18n";
//import {SUPPORT_LOCALES, setI18nLanguage, loadLocaleMessages} from "./i18n";
//import { setupI18n } from "./i18n.js";

import en from "./../locales/en.json";
import fr from "./../locales/fr.json";
import { createHead } from "@vueuse/head";

const options = {
    color: "#3d64ff",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
    autoFinish: false,
};

const i18n = createI18n({
    locale: "fr", // set locale
    //legacy: true,
    legacy: false,
    fallbackLocale: "fr", // set fallback locale
    globalInjection: true,
    messages: {
        fr: fr,
        en: en,
    },
});

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
/*
const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.use(VueProgressBar, options )
app.use(VueCookies)

app.mount("#app");
*/

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    {
        mode: "history",
        base: import.meta.env.BASE_URL,
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return {
                    el: to.hash,
                    // , offset: { x: 0, y: 10 }
                };
            }
            if (savedPosition) {
                return savedPosition;
            } else {
                return { top: 0 };
            }
        },
    },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
        // install plugins etc.
        /*
        const head = createHead()
        app.use(head)
*/
        app.use(i18n);
        const pinia = createPinia();
        app.use(pinia);
        /*
        // Refer to
        // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
        // for other serialization strategies.
        if (isClient)
            pinia.state.value = (initialState.pinia) || {}

        else
            initialState.pinia = pinia.state.value
        */
        //app.use(router);

        app.use(VueProgressBar, options);
        app.use(VueCookies);

        // return { head }
    }
);
