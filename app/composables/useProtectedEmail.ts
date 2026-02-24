export const useProtectedEmail = (email: Ref<string | undefined>) => {
    const revealed = ref(false)

    const parts = computed(() => {
        const e = email.value ?? ''
        const [local, domain] = e.split('@')
        return { local, domain }
    })

    const reveal = () => { revealed.value = true }

    const openMailto = () => {
        reveal()
        window.location.href = `mailto:${email.value}`
    }

    return { revealed, parts, reveal, openMailto }
}