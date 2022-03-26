<template>
    <div>
        <NavBar></NavBar>

        <section class="ftco-section contact-section ftco-no-pb">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-7 heading-section text-center ftco-animate">
                        <h1 class="big big-2">CV</h1>
                        <h2 class="mb-4">My CV</h2>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            {{currentPage}} / {{pageCount}}
                            <!--
                            <pdf
                                    src="./../assets/cvPicassoHouessou.pdf"

                            >


                            </pdf>
-->
                        </div>




                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<style>


</style>

<script>
    import NavBar from "../components/NavBar.vue";
    //import pdf from "vue-pdf" ;

    export default {
        components: {
            NavBar,
            //pdf
        },
        data() {
            return {
                currentPage: 1,
                pageCount: 0,
            }
        }
    }
</script>