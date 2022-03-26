import {defineStore} from 'pinia'

export const useStore = defineStore('main', {

    state() {
        return {
            author: 'Picasso Houessou',
            aboutMe: {
                name: 'Picasso Houessou',
                birthday: '04 Avril 1998',
                address: 'Fifadji, Cotonou Rép. Bénin',
                zipCode: 'none',
                email: 'houessoupicasso@yahoo.fr',
                phone: '+29995718340',
                website: document.baseURI
            },
            alertMessage: {
                show: false,
                message: '',
            }
        }
    },
    actions: {
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
/*
export default new Vuex.Store({

  state () {
    return {
      author: 'Picasso Houessou',
      aboutMe: {
        name: 'Picasso Houessou',
        birthday: '04 Avril 1998',
        address: 'Fifadji, Cotonou Rép. Bénin',
        zipCode: 'none',
        email: 'houessoupicasso@yahoo.fr',
        phone: '+29995718340',
        website: document.baseURI
      },
      alertMessage:{
        show : false ,
        message: '',
      }
    }
  },
  mutations: {
    INCREASE_ALERT_Message(state, payload) {
      state.alertMessage.show = true ;
      state.alertMessage.message = payload ;

    },
    CLOSE_ALERT(state) {
      state.alertMessage.show = false ;
      state.alertMessage.message = '' ;
    }
  },
  actions: {
    alertMessage(context, amount) {
      if ( typeof amount == 'string') {
        context.commit('INCREASE_ALERT_Message', amount);
        return ;
      }

      context.commit('INCREASE_ALERT_Message', amount.message);

    },
    closeAlert (context) {
      context.commit('CLOSE_ALERT') ;
    }
  },
  modules: {}
})
*/