<template>
  <header>
    <!-- Start Navigation -->
    <nav class="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">
      <div class="container d-flex justify-content-between align-items-center">

        <!-- Start Header Navigation -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <NuxtLink class="navbar-brand" to="/">
            <img src="assets/img/logo.png" class="logo" alt="Logo">
          </NuxtLink>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <img src="assets/img/logo.png" alt="Logo">
          <button type="button" class="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <i class="fa fa-times"></i>
          </button>
          <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
            <li>
              <NuxtLink class="navbar-brand" :to="localePath({ path: '/', hash: '#home' })">{{ t("Accueil") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navbar-brand" :to="localePath({ path: '/', hash: '#services' })">{{ t("Services") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navbar-brand" :to="localePath({ name: 'portfolios' })">{{ t("Portfolio") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navbar-brand" :to="localePath({ path: '/', hash: '#about' })">{{ t("A propos") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navbar-brand" :to="localePath({ path: '/', hash: '#contact' })">{{ t("Contact") }}</NuxtLink>
            </li>

          </ul>
        </div><!-- /.navbar-collapse -->

        <div class="attr-right">
          <!-- Start Atribute Navigation -->
          <div class="attr-nav">
            <ul>
              <li class="button"><a href="">{{t("Télécharger mon CV")}}</a></li>
            </ul>
          </div>
          <!-- End Atribute Navigation -->
        </div>

        <!-- Main Nav -->
      </div>
      <!-- Overlay screen for menu -->
      <div class="overlay-screen"></div>
      <!-- End Overlay screen for menu -->
    </nav>
    <!-- End Navigation -->
  </header>




</template>


<style lang="scss" >

     a.nav-link.NuxtLink-exact-active {
        color: #3e64ff !important;

        span {
            border-bottom: solid #3e64ff !important ;
        }
    }
</style>
<script setup>
const localePath = useLocalePath();
        const { locale,t } = useI18n()
</script>
