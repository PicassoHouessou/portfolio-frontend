<template>

  <header id="home">
    <nav class="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">

      <div class="container d-flex justify-content-between align-items-center">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
            <i class="fa fa-bars"/>
          </button>
          <NuxtLink class="navbar-brand" to="/">
            <img src="assets/img/logo.png" class="logo" :alt="t('Logo')">
          </NuxtLink>
        </div>
        <div id="navbar-menu" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title"> <img src="assets/img/logo.png" alt="Logo"></h5>

            <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
              <i class="fa fa-times"/>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <NuxtLink :to="localePath({ path: '/', hash: '#home' })" class="smooth-menu">
                  {{ t("Accueil") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ path: '/', hash: '#services' })" class="smooth-menu">
                  {{ t("Services") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ path: '/', hash: '#about' })" class="smooth-menu">
                  {{ t("A Propos") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ path: '/', hash: '#portfolio' })" class="smooth-menu">
                  {{ t("Portfolio") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ path: '/', hash: '#contact' })" class="smooth-menu">
                  {{ t("Contact") }}
                </NuxtLink>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div class="overlay-screen"/>
    </nav>

  </header>



</template>

<script setup lang="ts">
const localePath = useLocalePath();

const {t} = useI18n(
    {
      inheritLocale: true,
    } );

</script>
<style lang="scss" scoped>
a.nav-link.router-link-exact-active {
    color: #3e64ff !important;

    span {
        border-bottom: solid #3e64ff !important ;
    }
}
</style>