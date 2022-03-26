<template>
    <div>
        <NavBar></NavBar>
<!--
        <div class="hero-wrap js-fullheight">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                    <div class="col-lg-10 ftco-animate d-flex align-items-center">
                        <div class="text text-center">
                            <h1 class="mb-3 bread">Blog Single Post</h1>
                            <p class="breadcrumbs"><span class="mr-2"><router-link :to="{name: 'Home' }">Home <i class="ion-ios-arrow-forward"></i></router-link></span> <span class="mr-2"><router-link :to="{ name: 'Contact'}">Blog <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Contact Me <i class="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

      <Portfolio/>
        <Footer></Footer>
    </div>

</template>
<style lang="scss" scoped >

</style>
<script>

    import Portfolio from "../components/Portfolio.vue";
    import Footer from "../components/Footer.vue";
    import NavBar from "../components/NavBar.vue";

    export default {
        components: {
            Portfolio,

            Footer,
            NavBar,


        },

        data() {
            return {

            }

        },
        mounted() {

        },
        methods: {
        }
    }



</script>