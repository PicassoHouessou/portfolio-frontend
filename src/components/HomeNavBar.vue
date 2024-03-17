<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div class="container">
            <router-link :to="{name: 'index'}" class="navbar-brand"><span>p</span>icassoHouessou</router-link>
            <button aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" data-target="#ftco-nav"
                    data-toggle="collapse"
                    type="button">
                <span class="oi oi-menu"></span> {{ t("menu.menu") }}
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'index',  hash: '#home-section'}" class="nav-link">
                            <span>{{ t("menu.home") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'index',  hash: '#about-section'}" class="nav-link">
                            <span>{{ t("menu.about") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'index',  hash: '#resume-section'}" class="nav-link">
                            <span>{{ t("menu.resume") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'index',  hash: '#services-section' } " class="nav-link">
                            <span>{{ t("menu.services") }}</span></router-link>
                    </li>
                    <!-- A UTILISER PLUS TARD
                    <li class="nav-item">
                        <router-link :to="{name: 'index',  hash: '#projects-section'}" class="nav-link">
                            <span>Projects</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Blog',  hash: '#blog-section'}" class="nav-link"><span>My Blog</span>
                        </router-link>
                    </li>
                    -->
                    <li class="nav-item">
                        <router-link :to="{name: 'Portfolio' }" class="nav-link"><span>{{ t("menu.portfolio") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Contact' }" class="nav-link"><span>{{ t("menu.contact") }}</span>
                        </router-link>
                        <!-- <a href="#contact-section" class="nav-link"><span>Contact</span></a>  --> </li>
                    <li class="nav-item">
                        <form>
                            <select class="custom-select" v-model="$i18n.locale">
                                <!--
                                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
 -->
                                <option value="fr">Français</option>
                                <option value="en">English</option>

                            </select>

                        </form>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
a.nav-link.router-link-exact-active {
    color: #3e64ff !important;

    span {
        border-bottom: solid #3e64ff !important ;
    }
}
</style>
<script>

import {useI18n} from 'vue-i18n'
export default {
    name: 'NavBar',
    mounted() {

    },

    setup() {
        const {t, locale, availableLocales, d} = useI18n(
            {
             inheritLocale: true,
            //useScope: 'local'
        } )

        return {t, locale, availableLocales}
    }

}




</script>

<i18n lang="yaml">
fr:
    menu:
        menu: "Menu"
        home: "Accueil"
        about: "À Propos"
        services: "Services"
        resume: "Résumé"
        portfolio: "Portfolio"
        contact: "Contact"

en:
    menu:
        menu: "Menu"
        home: "Home"
        about: "About Me"
        services: "Services"
        resume: "Summary"
        portfolio: "Portfolio"
        contact: "Contact"
</i18n>

