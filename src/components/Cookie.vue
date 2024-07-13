<i18n>{
    "fr": {
        "cookie": {
            "title": "Politique de confidentialité",
            "description": "Attention nous utilisons des cookies. L'utilisation de ce site signifie que vous acceptez tous les cookies utilisés. Pour validez et continuer veuillez taper \"Y\" ou \"y\" puis entrez"
        }
    },
    "en": {
        "cookie": {
            "title": "Privacy Policy",
            "description": "Attention we use cookies. Using this site means that you accept all the cookies used. To validate and continue please type \"Y\" or \"y\" then enter"
        }
    }
}
</i18n>

<template>
    <div v-if="cookieShow===false" class="accept-cookie col-md-5 col-sm-8 col-11">
        <div class="container" @click="focus">
            <div class="row">
                <div class="">
                    <div class="header"> {{ t("cookie.title") }}
                        <button
aria-label="Close" class="close text-light" data-dismiss="alert"
                                type="button"
                                @click.prevent="cookieShow=true">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>{{ t("cookie.description") }}
                    </div>
                    <form action="" @submit.prevent="submit"><label for="acceptCookieInput" class="mr-2">#</label
                    ><input id="acceptCookieInput" v-model="form.accept" type="text">
                    </form>

                </div>


            </div>


        </div>

    </div>
</template>

<script>


import {useI18n} from "vue-i18n";

export default {
    name: "Cookie",
    setup() {
        const {t} = useI18n({
            inheritLocale: true
        });
        return {t}
    },
    data() {
        return {
            cookieShow: '',
            form: {
                accept: ''
            }
        }
    },
    // computed: {
    //     // eslint-disable-next-line vue/return-in-computed-property
    //     getAcceptCookie() {
    //         let cookieValue = this.$cookies.get('ACCEPT_COOKIES');
    //
    //         if (cookieValue == null) {
    //             // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    //             this.cookieShow = true;
    //         }
    //         // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    //         cookieValue == null ? this.cookieShow = false : cookieValue == true ? this.cookieShow = false : this.cookieShow = true ;
    //
    //         return this.cookieShow;
    //     },
    // },
    beforeMount() {
        this.getAcceptCookies();
    },
    mounted() {
        this.focus();
    },
    updated() {
        this.getAcceptCookies();
        this.focus();
    },
    methods: {
        focus() {
            const acceptCookieInput = document.getElementById('acceptCookieInput');
            if (acceptCookieInput != null) {
                acceptCookieInput.focus();
            }

        },
        getAcceptCookies() {
            let cookieValue = this.$cookies.get('ACCEPT_COOKIES');

            if (cookieValue == null) {
                 
                this.cookieShow = false;
            }
            cookieValue = parseInt(cookieValue);
            cookieValue = Boolean(cookieValue);
             
            this.cookieShow = cookieValue;
            return this.cookieShow;
        },
        submit() {
            const accept = this.form.accept
            if (accept === 'Y' || accept === 'y') {
                this.$cookies.set('ACCEPT_COOKIES', 1)
                this.cookieShow = true;
            } else if (accept === 'N' || accept === 'n') {
                this.$cookies.set('ACCEPT_COOKIES', false)
            } else {
                this.form.accept = '';
                return false;
            }
            this.form.accept = '';
        }
    }
}
</script>

<style lang="scss" scoped>

$backgroundColor: #343a40;
//$backgroundColor : #ebefff ;
$backgroundColor: #000000;

.accept-cookie {
    perspective: 300px !important;
    font-size: large;
    margin: 10px;
    padding: 10px;
    position: fixed;
    bottom: 30px;
    right: 10px;
    text-align: justify;
    border-radius: 10px;
    background-color: $backgroundColor;
    color: white;
    opacity: 0.9;

    .header {
        font-weight: normal;
        color: #fff;
        margin-bottom: 15px;
        font-size: 22px;
    }

    input {
        border: none;
        background-color: $backgroundColor;
        outline: none;
        color: white;
        caret-color: white;
    }
}
</style>