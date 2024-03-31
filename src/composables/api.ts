import type {UseFetchOptions} from "#app";
export const useApi = async <T>(url:any, options?: UseFetchOptions<T> | undefined) => {
    const store =  useLocaleStore()
    const config = useRuntimeConfig();

    return useFetch(url, {
        key: url,
        server:false,
        baseURL:config.public.apiUrl ,
        ...options,
        headers: {
            ...(options?.headers || {}),
            ...(store.locale ? { "X-LOCALE": store.locale } : {})
        }




    });
}