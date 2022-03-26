<template>

    <div id="app">

        <div class="alert-container-fixed show p-t-15 " v-if="alertMessage.show">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-xs-12 col-sm-10 col-sm-push-1 offset-lg-6 offset-md-6">
                        <div class="alert alert-message-box alert-flat shadow-lg">
                            <a @click="closeAlert" class="close" data-dismiss="alert" href="#">×</a>
                            <p class="cl1">
                                <strong>
                                    {{ alertMessage.message }}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <router-view></router-view>

        <!--
                <div id="ftco-loader" class="show fullscreen">
                    <svg class="circular" width="48px" height="48px">
                        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
                        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                                stroke="#F96D00"/>
                    </svg>
                </div>
        -->
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
        <Cookie/>

    </div>

</template>

<style lang="scss">
@import "./assets/css/open-iconic-bootstrap.min.css";
@import "./assets/css/animate.css";
@import "./assets/css/flaticon.css";

@import "./assets/css/icomoon.css";
@import "./assets/css/ionicons.min.css";
/*
    @import "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900";
    @import "./assets/css/open-iconic-bootstrap.min.css";
     @import "./assets/css/animate.css";
    @import "./vendors/owl-carousel/owl.carousel.min.css";
    @import "./vendors/owl-carousel/owl.theme.default.min.css";
    @import "./assets/css/magnific-popup.css";
    @import "./assets/css/aos.css";
    @import "./assets/css/ionicons.min.css";


    @import "./assets/css/flaticon.css";

    @import "./assets/css/icomoon.css";

    @import "./assets/css/style.css";
*/

@import "src/assets/scss/app.scss";


.ftco-animate {
    opacity: 1;
    visibility: visible;
}

.alert-container-fixed {
    word-wrap: break-word;
    position: fixed;
    top: 70px;
    right: 20px;
    z-index: 999;
    width: 100%;

    .alert-message-box {
        border-radius: 10px !important;
        color: white;
        font-weight: bold;
        font-max-size: larger;
        font-size: 1.2em;
        background-color: #3d67ff !important;
        opacity: 1;
    }

}

</style>

<script>
/*
    import "./../public/assets/css/open-iconic-bootstrap.min.css";
    import "./../public/assets/css/animate.css";
    import "./../public/vendors/owl-carousel/owl.carousel.min.css";
    import "./../public/vendors/owl-carousel/owl.theme.default.min.css";
    import "./../public/assets/css/magnific-popup.css";
    import "./../public/assets/css/aos.css";
    import "./../public/assets/css/ionicons.min.css";
    import "./../public/assets/css/flaticon.css";
    import "./../public/assets/css/icomoon.css";
    import "./../public/assets/css/style.css";
*/
/*
import 'bootstrap' ;
import "jquery" ;
import "popper.js" ;
import "owl.carousel" ;
*/

// import NavBar from './components/NavBar.vue' ;

import Cookie from "./components/Cookie.vue";
import $ from "jquery" ;
import "bootstrap";

//import {mapState} from "vuex" ;

import {useStore} from '@/stores/root'

export default {
    name: 'App',
    components: {
        Cookie
    },
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Picasso Houess Website',
        // all titles will be injected into this template
        titleTemplate: '%s | Picasso Houessou'
    },
    computed: {
        //...mapState(['alertMessage'])
        alertMessage() {
            return this.store.alertMessage;
        }
    },
    setup() {
        const store = useStore()
        //console.log(store.alertMessage )
        ;
        return {
            store,
        }
    },
    mounted() {

        goHere();
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish()
    },
    created() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start()
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
        })
        //  hook the progress bar to finish after we've finished moving router-view
        // eslint-disable-next-line no-unused-vars
        this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
        })
    },
    methods: {
        closeAlert(e) {
            e.preventDefault();
            //this.$store.dispatch('closeAlert');
            this.store.closeAlert();
        }
    }
}

//loader
/*
let loader = function() {
    setTimeout(function() {
        let loaderElement= document.getElementById('ftco-loader')
        if(loaderElement.childElementCount > 0) {
            loaderElement.classList.remove('show');
        }
    }, 1);
};


loader();
*/

var goHere = function () {

    $('.mouse-icon').on('click', function (event) {

        event.preventDefault();

        $('html,body').animate({
            scrollTop: $('.goto-here').offset().top
        }, 500, 'easeInOutExpo');

        return false;
    });
};


// this makes the height of each page equal to the height of the window
$('.page').css('height', $(window).height());


</script>