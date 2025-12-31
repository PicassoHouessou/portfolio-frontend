<template>
    <div class="col-md-6 col-lg-3 d-flex ftco-animate">
        <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
                <span :class="icon"/>
            </div>
            <div>
                <h3 class="mb-4">{{ cName }}</h3>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactCard", props: {
        cName: {
            default:null,
            required: false,
            type: String
        },
        content: {
            required: false,
            default: '',
            type: String
        },
        icon: {
            required: false,
            default: '',
            type: String
        }

    }
}
</script>

<style scoped>

</style>