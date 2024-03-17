import {defineStore} from 'pinia'

export const useLocaleStore = defineStore('locale', ()=>{
const locale =ref("");

    const updateLocale=(code: string)=>{
        locale.value = code;
    }
    return { locale, updateLocale }

});
