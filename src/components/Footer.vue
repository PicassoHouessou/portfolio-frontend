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
  <!-- Start Footer
============================================= -->
  <footer class="bg-dark text-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <ul class="footer-social">
            <li class="facebook">
              <a :href="store.socials.facebook" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="github">
              <a :href="store.socials.github" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-6 ">
          <p>&copy; 2021 Picasso Houessou. {{ t("Tous les droits réservés") }}</p>
        </div>
        <div class="col-lg-2 text-end"><LanguageSwitcher/></div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

</template>

<script setup>
import {useStore} from "~/stores/root";

const store = useStore()

           const date= new Date().getFullYear();
      const      contact= '+22995718340';
      const      email= 'houessoupicasso@yahoo.fr';
         const   address= 'Fifadji, Cotonou Rép. Bénin';



        const {  t } = useI18n({
            inheritLocale: true
        });


       const click=()=> {
            return false;
        }


</script>
