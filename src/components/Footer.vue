<i18n>
{
    "fr": {
        "title": "À Propos",
        "À Propos": "À Propos",
        "description": "Je suis un jeune informaticien administrateur système et réseau. Je suis également un développeur web..",
        "Liens utiles":  "Liens utiles",
        "Accueil": "Accueil",
        "Services": "Services",
        "Projets": "Projets",
        "Contact": "Contact",
        "Réseau": "Réseau",
        "Développement Web": "Développement Web",
        "Développement d'Application": "Développement d'Application",
        "Formation": "Développement Web",
        "Tous les droits réservés": "Tous les droits réservés"
    },
    "en": {
        "title": "About Us",
        "À Propos": "About Us",
        "description": "I am a young computer scientist system and network administrator. I am also a web developer.",
        "Liens utiles":  "Useful Links",
        "Accueil": "Home",
        "Services": "Services",
        "Projets": "Projects",
        "Contact": "Contact Us",
        "Réseau": "Network",
        "Développement Web": "Web Development ",
        "Développement d'Application": "Application Development",
        "Formation": "Training",
        "Tous les droits réservés": "All rights reserved"
    }
}
</i18n>
<template>
    <footer class="ftco-footer ftco-section">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">{{ t("title") }}</h2>
                        <p>{{ t("description") }}</p>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li class="ftco-animate"><a href="http://github.com/picassoHouessou"><span
                                class="icon-github"></span></a></li>
                            <li class="ftco-animate"><a href="www.facebook.com/picasso.houessou.5"><span
                                class="icon-facebook"></span></a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4 ml-md-4">
                        <h2 class="ftco-heading-2">{{ t("Liens utiles") }}</h2>
                        <ul class="list-unstyled">
                            <li>
                                <router-link :to="{name: 'Home'} "><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Accueil") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#about-section' } "><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("À Propos") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#services-section' } "><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Services") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#projects-section' } " href="#"><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Projets") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Contact' } " href="#"><span
                                    class="icon-long-arrow-right mr-2"></span>Contact
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Services</h2>
                        <ul class="list-unstyled">
                            <li>
                                <router-link :to="{name: 'Home', hash: '#services-section' } "><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Réseau") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#services-section' } " href="#"><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Développement Web") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#services-section' } " href="#"><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Développement d'Application") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Home', hash: '#services-section' } " href="#"><span
                                    class="icon-long-arrow-right mr-2"></span>{{ t("Formation") }}
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">{{ t("Contact") }} </h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon icon-map-marker"></span><span class="text">{{ address }}</span>
                                </li>
                                <li><a href="#"><span class="icon icon-phone"></span><span class="text">{{
                                        contact
                                    }}</span></a></li>
                                <li><a :href="'mailto:'+email"><span class="icon icon-envelope"></span><span
                                    class="text">{{ email }}</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">

                    <p>
                        Copyright &copy; {{ date }} {{ t("Tous les droits réservés") }} | <a
                        href="https://picassohouessou.com">picassoHouessou</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>


</template>

<script>
import {useI18n} from "vue-i18n";

export default {
    name: "Footer",
    data() {
        return {
            date: new Date().getFullYear(),
            contact: '+22995718340',
            email: 'houessoupicasso@yahoo.fr',
            address: 'Fifadji, Cotonou Rép. Bénin'
         }
    },
    setup () {
        const {  t } = useI18n({
            inheritLocale: true
        });
        return {t}
    },
    methods: {
        click() {
            return false;
        }
    }
}
</script>

<style lang="scss">
.ftco-footer .ftco-footer-social .ftco-animate {
    transition: transform 400ms;

    &:hover {
        transform: scale(1.2);

        a {
            color: #3d64ff;
            background-color: #3d64ff;
            opacity: 1;
        }

    }

}

</style>