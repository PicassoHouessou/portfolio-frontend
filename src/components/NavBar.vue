
<i18n lang="yaml">
fr:
    menu:
        menu: "Menu"
        home: "Accueil"
        about: "À Propos"
        services: "Services"
        resume: "Résumés"
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


<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div class="container">
            <router-link :to="{name: 'Home'}" class="navbar-brand"><span>p</span>icassoHouessou</router-link>
            <button aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" data-target="#ftco-nav"
                    data-toggle="collapse"
                    type="button">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'Home',  hash: '#home-section'}" class="nav-link">
                            <span>{{ $t("menu.home") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Home',  hash: '#about-section'}" class="nav-link">
                            <span>{{ $t("menu.about") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Home',  hash: '#resume-section'}" class="nav-link">
                            <span>{{ $t("menu.resume") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Home',  hash: '#services-section' } " class="nav-link">
                            <span>{{ $t("menu.services") }}</span></router-link>
                    </li>
                    <!-- A UTILISER PLUS TARD
                    <li class="nav-item">
                        <router-link :to="{name: 'Home',  hash: '#projects-section'}" class="nav-link">
                            <span>Projects</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Blog',  hash: '#blog-section'}" class="nav-link"><span>My Blog</span>
                        </router-link>
                    </li>
                    -->
                    <li class="nav-item">
                        <router-link :to="{name: 'Portfolio' }" class="nav-link"><span>{{ $t("menu.portfolio") }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Contact' }" class="nav-link"><span>{{ $t("menu.contact") }}</span>
                        </router-link>
                        <!-- <a href="#contact-section" class="nav-link"><span>Contact</span></a>  --> </li>
                    <li class="nav-item">
                        <form>
                            <select class="custom-select" v-model="$root.$i18n.locale">
                                <!--
                                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
 -->
                                <option value="fr">fr</option>
                                <option value="en">en</option>

                            </select>

                        </form>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss">
    @import "bootstrap/scss/bootstrap";

    @import "src/assets/scss/variables.scss";

     a.nav-link.router-link-exact-active {
        color: #3e64ff !important;

        span {
            border-bottom: solid #3e64ff !important ;
        }
    }




</style>
<script>
import $ from "jquery";

export default {
    name: 'NavBar',
    mounted() {

        burgerMenu();
        scrollWindow();
    },
}
// Burger Menu
// eslint-disable-next-line
var burgerMenu = function () {

    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {

        event.preventDefault();

        if ($('#ftco-nav').is(':visible')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }


    });

};

// scroll
// eslint-disable-next-line
var scrollWindow = function () {
    $(window).scroll(function () {
        var $w = $(this),
            st = $w.scrollTop(),
            navbar = $('.ftco_navbar'),
            sd = $('.js-scroll-wrap');

        if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
            }
        }
        if (st < 150) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep');
            }
        }
        if (st > 350) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
            }

            if (sd.length > 0) {
                sd.addClass('sleep');
            }
        }
        if (st < 350) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
            if (sd.length > 0) {
                sd.removeClass('sleep');
            }
        }
    });
};

</script>
