import {defineStore} from 'pinia'

export const useStore = defineStore('main', {

    state() {
        return {
            socials:{facebook:"http://www.facebook.com/picasso.houessou.5",linkedin:"https://www.linkedin.com/in/picassohouessou/", github:"http://github.com/picassoHouessou" },
            author: 'Picasso Houessou',
            aboutMe: {
                name: 'Picasso Houessou',
                birthday: '04 Avril 1998',
                address: '62137 Coulogne, France',
                email: 'houessoupicasso@yahoo.fr',
                phone: '+29995718340',
                website: ""
            },
            alertMessage: {
                show: false,
                message: '',
            }
        }
    },
    actions: {
        updateSocials(socials){

            this.socials = socials
        },
        updateAboutMe(aboutMe){
            this.aboutMe = aboutMe
        },
        updateAuthor(){

        },



        updateAlertMessage(amount) {
            if (typeof amount == 'string') {
                this.alertMessage.show = true;
                this.alertMessage.message = amount
            } else {
                this.alertMessage.show = true;
                this.alertMessage.message = amount.message
            }
        },
        closeAlert(context) {
            this.alertMessage.show = false;
            this.alertMessage.message = '';
        }
    },
});
