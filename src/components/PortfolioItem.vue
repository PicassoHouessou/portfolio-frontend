<template>
  <div class="overlay-content" data-bs-toggle="modal" data-bs-target="#projectSingleModal" @click="setCurrentPost(post)">
    <NuxtImg :src="API+getTranslation(unref(post),locale)?.image?.contentUrl" :alt="getTranslation(unref(post),locale)?.title" role="button" />
    <div class="content">
      <div class="title">
        <span>{{ getTranslation(post,locale)?.title }}</span>
        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal" @click="setCurrentPost(post)">UI design</a></h5>
      </div>
      <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i class="fas fa-arrow-right"></i></a>
    </div>
  </div>

</template>

<script setup  lang="ts">
import {API} from "~/js/constant";
import {getTranslation} from "~/js/utils";
import type {Post} from "~/models/Post";

const { locale, t } = useI18n({
  inheritLocale: true
});

const router = useRouter();

const localePath = useLocalePath();

defineProps<{
  post?: Post
}>()

const currentPost = ref<Post|undefined>(undefined);
const setCurrentPost=(post?:Post)=>{
  console.log(post)
  currentPost.value = unref(post);
}
const click=(target:any,post:Post)=> {
  target.preventDefault();
  router.push(localePath({path: 'portfolios', params: {url: getTranslation(post)?.externalUrl}}));
}

</script>

<style scoped>

</style>