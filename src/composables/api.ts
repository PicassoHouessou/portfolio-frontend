import type {UseFetchOptions} from "#app";
import type {KeysOf} from "#app/composables/asyncData";
import {API_URL} from "~/js/constant";
export const useApi = async <T>(url:any, options?: UseFetchOptions<T> | undefined) => {
    const store =  useLocaleStore()
  
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