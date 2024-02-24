<i18n>
{
    "fr": {
        "head": {
            "keywords": "Picasso Houessou, Picasso Houessou-Dossou, Développeur web, Développeur backend, développeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, développeur wordpress, développeur PHP, développeur vue.js, création de site web au bénin, web designer au bénin, développeur d'API, création de site web à cotonou, refonte de site web",
            "description": "Besoin de me joindre ? Je réponds à toutes vos préoccupations."
        },
        "Contact": "Contact",
        "Me contacter": "Me contacter",
        "Envie d'un service ou pour un partenariat": "Envie d'un service ou pour un partenariat",
        "Adresse": "Adresse",
        "Numéro de Téléphone": "Numéro de Téléphone",
        "Adresse Email": "Adresse Email",
        "Site Web": "Site Web",
        "Votre nom": "Votre nom",
        "Votre Email": "Votre Email",
        "Objet": "Objet",
        "Entrez votre message ici": "Entrez votre message ici",
        "Envoyer": "Envoyer",
        "formSuccessMessage": "Votre message a été correctement envoyé",
        "formErrorMessage": "Une erreur a été rencontrée. Veuillez réessayer"
    },
    "en": {
        "head": {
            "keyword": "Picasso Houessou, Picasso Houessou-Dossou, Développeur web, Développeur backend, développeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, développeur wordpress, développeur PHP, développeur vue.js, création de site web au bénin, web designer au bénin, développeur d'API, création de site web à cotonou, refonte de site web",
            "description": "Need to reach me? I will answer all your concerns."
        },
        "Contact": "My Contacts",
        "Me contacter": "Contact Us",
        "Envie d'un service ou pour un partenariat": "Looking for a service or for a partnership",
        "Adresse": "Address",
        "Numéro de Téléphone": "Phone Number",
        "Adresse Email": "Email Address",
        "Site Web": "Website",
        "Votre nom": "Your Name",
        "Votre Email": "Your Email",
        "Objet": "Object",
        "Entrez votre message ici": "Type your message here",
        "Envoyer": "Send",
        "formSuccessMessage": "Your message has been sent correctly",
        "formErrorMessage": "An error has been encountered. Please try again"
    }
}
</i18n>

<template>
    <div id="page">
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
        </div>
        -->
        <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-7 heading-section text-center ftco-animate">
                        <h1 class="big big-2">{{ t("Contact") }}</h1>
                        <h2 class="mb-4">{{ t("Me contacter") }}</h2>
                        <p>{{ t("Envie d'un service ou pour un partenariat") }}</p>
                    </div>
                </div>

                <div class="row d-flex contact-info mb-5">
                    <ContactCard :c-name="t('Adresse')" icon="icon-map-signs" :content="aboutMe.address"/>
                    <ContactCard :c-name="t('Numéro de Téléphone')" icon="icon-phone2" :content="aboutMe.phone"/>
                    <ContactCard :c-name="t('Adresse Email')" icon="icon-paper-plane" :content="aboutMe.email"/>
                    <ContactCard :c-name="t('Site Web')" icon="icon-globe" :content="aboutMe.website"/>
                </div>

                <div class="row no-gutters block-9">
                    <div class="col-md-6 order-md-last d-flex">
                        <div class="col-md-12">
                            <VeeForm v-slot="{ invalid, handleSubmit, reset }" as="div">
                                <form @reset.prevent="reset" @submit="handleSubmit($event, submit)" method="post"
                                      class="bg-light p-4 p-md-5 contact-form" id="contactUsForm"
                                      novalidate="novalidate">
                                    <div class="form-group">
                                        <Field name="name" rules="required" v-slot="{ field, errors }">
                                            <input :class="{'input-error': errors[0] }" class="form-control"
                                                   :placeholder="t('Votre nom')" type="text" v-bind="field"
                                                   v-model="form.fullName">
                                            <span class="validation-error">{{ errors[0] }}</span>
                                        </Field>

                                    </div>
                                    <div class="form-group">
                                        <Field name="email" rules="email|required" v-slot="{field, errors }">
                                            <input
                                                class="form-control" :placeholder="t('Votre Email')"
                                                type="email" v-bind="field" v-model="form.email"
                                                :class="{'input-error': errors[0] }">
                                            <span class="validation-error">{{ errors[0] }}</span>
                                        </Field>

                                    </div>
                                    <div class="form-group">
                                        <Field name="subject" rules="required" v-slot="{ field, errors } ">
                                            <input class="form-control" :placeholder="t('Objet')"
                                                   type="text" v-bind="field" v-model="form.subject"
                                                   :class="{'input-error': errors[0] }">
                                            <span class="validation-error">{{ errors[0] }}</span>
                                        </Field>
                                    </div>
                                    <div class="form-group">
                                        <Field name="message" rules="required|min:30|max:5000"
                                               v-slot="{field, errors } ">
                                <textarea class="form-control" cols="30" id=""
                                          :placeholder="t('Entrez votre message ici')"
                                          rows="7" v-bind="field" v-model="form.message"
                                          :class="{'input-error': errors[0] }"></textarea>
                                            <span class="validation-error">{{ errors[0] }}</span>
                                        </Field>
                                    </div>
                                    <!--
                                    <div class="form-group">
                                           <Field :class="{'input-error': errors[0] }" class="form-control" name="name"
                                                   placeholder="Votre nom" type="text" rules="required" v-model="form.fullName" />
                                            <span class="validation-error">{{ errors[0] }}</span>

                                    </div>
                                    <div class="form-group">
                                           <Field
                                                class="form-control" name="email" placeholder="Votre Email"
                                                type="email" v-model="form.email" rules="email|required" :class="{'input-error': errors[0] }" />
                                            <span class="validation-error">{{ errors[0] }}</span>


                                    </div>
                                    <div class="form-group">
                                           <Field class="form-control" name="subject" placeholder="Objet"
                                                   type="text" rules="required" v-model="form.subject" :class="{'input-error': errors[0] }" />
                                            <span class="validation-error">{{ errors[0] }}</span>

                                    </div>
                                    <div class="form-group">

                                    <Field class="form-control" cols="30" id="" name="message"
                                              placeholder="Entrez votre message ici"
                                              rows="7"
                                              v-model="form.message" rules="required|min:30|max:5000" :class="{'input-error': errors[0] }"></Field>
                                            <span class="validation-error">{{ errors[0] }}</span>

                                    </div>
                                    -->
                                    <div class="form-group">
                                        <button class="btn btn-primary py-3 px-5 submit-contact" type="submit"
                                        >{{ t('Envoyer') }}
                                        </button>
                                    </div>
                                </form>
                            </VeeForm>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex">
                        <div class="img photo-picasso"
                             style="background-image: url(/assets/images/picasso/home-about.png);"></div>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>

</template>
<style lang="scss" scoped>
.input-error {
    border: solid 2px red !important;
    margin-bottom: 5px;
}

.validation-error {
    color: #dc3545;
}

/*
    .submit-contact {
        transition: transform 400ms;
        &:hover {
            background-color: red !important;
            transform: scale(1.01);
        }
    }*/

//La photo de Picasso
.photo-picasso {
    background-color: #c6c6c6;
}
</style>
<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import {useStore} from '@/stores/root';
import axios from "./../js/axios";

import ContactCard from "../components/ContactCard.vue";

import {configure, defineRule, Form as VeeForm, Field} from "vee-validate";
import {localize, setLocale} from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import fr from '@vee-validate/i18n/dist/locale/fr.json';
import {email, required, min, max} from '@vee-validate/rules';
import {useI18n} from 'vue-i18n'
import {useHead} from "@vueuse/head";

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

configure({
    generateMessage: localize({
        en,
        fr,
    }),
});
/*
extend('required', {
    ...required,
    message: 'Le champ {_field_} est requis'
});
extend('email', {
    ...email,
    message: 'Veuillez entrer une adresse email valide'
});
extend('min', {
    ...min,
    message: 'Votre message doit être d\'au moins 30 caractères'
});
extend('max', {
    ...max,
    message: 'Votre message doit dépassé 5000 caractères'
});
*/
/*
    axios.get(
        '/contact_uses/1'
    ).then(response =>console.log(response))
    .catch(error=>console.log(error)) ;
    */

export default {
    name: "Contact",
    components: {
        ContactCard,
        Footer,
        NavBar,
        VeeForm,
        Field
        //Field,
        //ValidationObserver
    },
    computed: {
        aboutMe() {
            return this.store.aboutMe;
        }

    },
    setup() {
        const store = useStore()
        const {locale, t} = useI18n({
            inheritLocale: true
        })
        useHead({
            title: "Picasso Houessou | Contact",
            meta: [
                {
                    name: `keywords`,
                    content: t("head.keywords"),
                },
                {
                    name: `description`,
                    content: t("head.description"),
                },
            ],
        });

        return {
            store,
            locale, t
        }
    },
    data() {
        return {
            form: {
                message: '',
                fullName: '',
                email: '',
                subject: '',
                // recaptcha: ''
            }

        }
    },
    mounted() {
        setLocale(this.$i18n.locale);
        //this.store.alertMessage(this.t("formSuccessMessage"));
    },

    methods: {
        async recaptcha() {
            // (optional) Wait until recaptcha has been loaded.
            await this.$recaptchaLoaded()

            // Execute reCAPTCHA with action "login".
            this.form.recaptcha = await this.$recaptcha('homepage')
            // Do stuff with the received token.
        },
        submit() {
            this.$Progress.start();

            axios.post(
                '/contact_uses',
                this.form
            )
                .then(() => {
                    this.$Progress.finish();
                    this.store.updateAlertMessage(this.t("formSuccessMessage"));
                })
                .catch((error) => {
                    this.$Progress.fail();
                    console.log(error);
                    this.store.updateAlertMessage(this.t('formErrorMessage'));
                })
        },
        progress() {
            this.$Progress.start();
        }
    }
}

//     import "https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap" ;
//           function initMap() {
//             var uluru = {lat: -25.363, lng: 131.044};
//             var grayStyles = [
//               {
//                 featureType: "all",
//                 stylers: [
//                   { saturation: -90 },
//                   { lightness: 50 }
//                 ]
//               },
//               {elementType: 'labels.text.fill', stylers: [{color: '#A3A3A3'}]}
//             ];
//              new google.maps.Map(document.getElementById('map'), {
//               center: {lat: -31.197, lng: 150.744},
//               zoom: 9,
//               styles: grayStyles,
//               scrollwheel:  false
//             });
//           }

</script>