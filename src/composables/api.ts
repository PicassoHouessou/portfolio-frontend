import type {UseFetchOptions} from "#app";
import type {KeysOf} from "#app/composables/asyncData";
import {API_URL} from "~/js/constant";
import axios from "axios";
export const useApi = async <T>(url:any, options?: UseFetchOptions<T> | undefined) => {
    const store =  useLocaleStore()
    const config = useRuntimeConfig();

    return useFetch(url, {
        key: url,
        server:false,
        baseURL:API_URL ,
        ...options,
        headers: {
            ...(options?.headers || {}),
            ...(store.locale ? { "X-LOCALE": store.locale } : {})
        }




    });
}

export const downloadMyCv = (url:string, locale="en", label?:string) => {

    useApi

    axios.get(url + "?lang=" + unref(locale), {responseType: "blob"})
        .then((response) => {
            const blob = new Blob([response.data], {type: "application/pdf"});
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = label ? label: "Mon CV";
            link.click();
            URL.revokeObjectURL(link.href);
            // this.$Progress.finish();
        })
        .catch((error) => {
            console.log(error);
            // this.$Progress.finish()
        });


}




/*
export function $api<T>(
    request: Parameters<typeof $fetch<T>>[0],
    opts?: Parameters<typeof $fetch<T>>[1],
) {
    const auth = useAuth()

    return $fetch<T>(request, {
        ...opts,
        headers: {
            Authorization: auth.logged ? `Bearer ${auth.accessToken}` : '',
            ...opts?.headers,
        },
    })
}


 */