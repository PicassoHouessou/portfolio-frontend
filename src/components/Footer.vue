<template>
  <footer class="bg-dark text-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <ul class="footer-social">
            <li class="linkedin">
              <a :href="store.socials.linkedin" target="_blank">
                <i class="fab fa-linkedin"/>
              </a>
            </li>
            <li class="github">
              <a :href="store.socials.github" target="_blank">
                <i class="fab fa-github"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 ">
          <p>&copy; 2024 Picasso Houessou. {{ t("Tous les droits réservés") }}</p>
        </div>
        <div class="col-lg-2 text-end"><LanguageSwitcher/></div>
      </div>
    </div>
  </footer>

</template>

<script setup lang="ts">
import {useStore} from "~/stores/root";

const store = useStore();
        const {  t } = useI18n({
            inheritLocale: true
        });
</script>
