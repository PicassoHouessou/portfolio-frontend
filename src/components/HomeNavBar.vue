<template>
  <!-- Header
============================================= -->
  <header id="home">
    <!-- Start Navigation -->
    <nav class="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">

      <div class="container d-flex justify-content-between align-items-center">

        <!-- Start Header Navigation -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <NuxtLink class="navbar-brand" to="/">
            <img src="assets/img/logo.png" class="logo" alt="Logo">
          </NuxtLink>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar-menu" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title"> <img src="assets/img/logo.png" alt="Logo"></h5>

            <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <NuxtLink :to="localePath({ name: '/', hash: '#home' })" class="smooth-menu">
                  {{ t("Accueil") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ name: '/', hash: '#services' })" class="smooth-menu">
                  {{ t("Services") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ name: '/', hash: '#services' })" class="smooth-menu">
                  {{ t("A Propos") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ name: '/', hash: '#portfolio' })" class="smooth-menu">
                  {{ t("Portfolio") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ name: '/', hash: '#contact' })" class="smooth-menu">
                  {{ t("Contact") }}
                </NuxtLink>
              </li>

            </ul>

          </div>
        </div>
      </div>
      <!-- Overlay screen for menu -->
      <div class="overlay-screen"></div>
      <!-- End Overlay screen for menu -->
    </nav>
    <!-- End Navigation -->
  </header>

</template>

<style lang="scss" scoped>
a.nav-link.router-link-exact-active {
    color: #3e64ff !important;

    span {
        border-bottom: solid #3e64ff !important ;
    }
}
</style>
<script setup lang="ts">
const localePath = useLocalePath();

const {t} = useI18n(
    {
      inheritLocale: true,
      //useScope: 'local'
    } );

</script>