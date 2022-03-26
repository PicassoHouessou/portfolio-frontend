<template>

    <div class="project img ftco-animate d-flex justify-content-center align-items-center"
         :style="{ 'background-image': 'url(../assets/images/portfolio/' + image + ')', 'backround-size': 'cover', 'background-repeat': 'no-repeat' }">
        <div class="overlay"></div>
        <div class="text text-center p-4">
            <h3><a :href="url" @click="click">{{ title }}</a></h3>
            <span>{{ category }}</span>
        </div>
    </div>

</template>

<script>
export default {
    name: "PortfolioItem",
    data() {
        return {}

    },
    props: [
        'url',
        'title',
        'image', 'category'],
    methods: {
        click(target) {
            target.preventDefault();
            console.log(this.url);
            this.$router.push({name: 'PortfolioShow', params: {url: this.url}});
        }

    }
}
</script>

<style scoped>

</style>