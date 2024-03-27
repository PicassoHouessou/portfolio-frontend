<template>
  <header>
    <nav class="navbar navbar-expand-md mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">
      <!--    <nav class="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">-->
      <div class="container d-flex justify-content-between align-items-center">


        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <NuxtLink class="navbar-brand" to="/">
            <img src="assets/img/logo.png" class="logo" :alt="t('Logo')">
          </NuxtLink>
        </div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar-menu" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title"> <img src="assets/img/logo.png" alt="Logo"></h5>

            <button type="button" class="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#navbar-menu">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div class="offcanvas-body justify-content-center align-content-center">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <NuxtLink  :to="localePath({ path: '/', hash: '#home' })">{{ t("Accueil") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink  :to="localePath({ path: '/', hash: '#services' })">{{ t("Services") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath({ name: 'portfolios' })">{{ t("Portfolio") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink  :to="localePath({ path: '/', hash: '#about' })">{{ t("A propos") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink  :to="localePath({ path: '/', hash: '#contact' })">{{ t("Contact") }}</NuxtLink>
              </li>

            </ul>


          </div>
        </div>


        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="attr-right">
          <!-- Start Atribute Navigation -->
          <div class="attr-nav">
            <ul>
              <li class="button"><CVButton/></li>
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
<script setup lang="ts">
import CVButton from "~/components/CVButton.vue";

const localePath = useLocalePath();
        const { locale,t } = useI18n()

const downloadMyCv = async (url: string, locale: string = "en" ): Promise<void> => {
  try {
    const { data: response} = await useApi<Blob>(url + `?lang=${locale}`, {
      responseType: "blob"
    });
    if (response.value){
      const blob = new Blob([await response.value.arrayBuffer()], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = t("Mon CV"); // Assuming $t is your translation function
      link.click();
      URL.revokeObjectURL(link.href);
    }else{
      throw new Error(t("Fichier indisponible"))
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
