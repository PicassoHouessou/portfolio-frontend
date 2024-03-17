import {defineStore} from 'pinia'

export const useStore = defineStore('main', {

    state() {
        return {
            socials:{facebook:"http://www.facebook.com/picasso.houessou.5",github:"http://github.com/picassoHouessou" },
            author: 'Picasso Houessou',
            aboutMe: {
                name: 'Picasso Houessou',
                birthday: '04 Avril 1998',
                address: '62137 Coulogne, France',
                zipCode: 'none',
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
            this.socials = aboutMe
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
