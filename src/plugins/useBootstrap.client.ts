//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import * as bootstrap from 'bootstrap';
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)
})