import {defineStore} from 'pinia'

export const useStore = defineStore('main', {

    state() {
        return {

            socials:{facebook:"http://www.facebook.com/picasso.houessou.5",linkedin:"https://www.linkedin.com/in/picassohouessou/", github:"http://github.com/picassoHouessou" },
            author: 'Picasso Houessou',
            user: {
                id:2,
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
        updateId(id){
            this.id = id
        },
        updateSocials(socials){

            this.socials = socials
        },
        updateUser(user){
            this.user = user
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
