<template>
    <!-- Start Projects Single Modal -->
    <div id="projectSingleModal" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button ref="closeButton" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <NuxtImg
                                :src="config.public.backendUrl+getTranslation(unref(currentPost), locale)?.image?.contentUrl"
                                :alt="getTranslation(unref(currentPost))?.title" sizes="sm:1024px md:1024px "
                                width="1028" height="450"/>
                            <!--                width="1028" height="450"-->
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    {{ t("Client") }} <span>{{ t("Privé") }}</span>
                                                </li>
                                                <li>
                                                    {{ t("Type De Projet") }}
                                                    <span>{{ getCategories(unref(currentPost)!?.categories) }}</span>
                                                </li>
                                                <!--
                                                <li>
                                                  {{ t("Date") }} <span>{{ t("25 February, 2023") }}</span>
                                                </li>
                                                <li>
                                                  {{ t("Adresse") }} <span>{{ t("") }}</span>
                                                </li>
                                                -->
                                            </ul>
                                            <ul class="social">
                                                <li>
                                                    <button class="btn btn-md circle btn-theme"
                                                            @click="showProject(currentPost)">
                                                        {{ t("Aperçu en direct") }}
                                                    </button>
                                                </li>
                                            </ul>
                                            <!--
                                            <ul class="social">
                                              <li>
                                                <h4>{{ t("Partager") }}:</h4>
                                              </li>
                                              <li>
                                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                              </li>
                                              <li>
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                              </li>
                                              <li>
                                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                              </li>
                                              <li>
                                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                              </li>
                                            </ul>
                                            -->
                                        </div>
                                    </div>
                                    <h2>{{ getTranslation(unref(currentPost), locale)?.title }}</h2>
                                </div>
                            </div>
                        </div>

                        <div class="main-content mt-40">
                            {{ getTranslation(unref(currentPost), locale)?.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal -->
    <div class="container">
        <div class="row">
            <div class="col-md-12 gallery-content mb--15">
                <div class="magnific-mix-gallery masonary">
                    <div id="portfolio-grid" class="gallery-items colums-3">
                        <!-- Single Item -->
                        <div v-for="post in posts" :key="post.id" class="pf-item">
                            <div class="overlay-content" data-bs-toggle="modal" data-bs-target="#projectSingleModal"
                                 @click="setCurrentPost(post)">
                                <NuxtImg
                                    :src="config.public.backendUrl+getTranslation(unref(post),locale)?.image?.contentUrl"
                                    :alt="getTranslation(unref(post), locale)?.title" width="480" height="200"
                                    role="button"/>
                                <div class="content pointer">
                                    <div class="title">
                                        <span>{{ getTranslation(unref(post), locale)?.title }}</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"
                                               @click="setCurrentPost(post)">{{
                                                getCategories(unref(post)!?.categories)
                                            }}</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i
                                        class="fas fa-arrow-right"/></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ApiRoutesWithoutPrefix} from "~/js/constant";
import {generateUrl, getTranslation} from "~/js/utils";
import type {Post} from "~/models/Post";
import {useStore} from "~/stores/root";
import {ref} from "vue";
import type {Category} from "~/models/Category";

const config = useRuntimeConfig()

const props = defineProps<{
    items?: number
}>()


const {locale, t} = useI18n({
    inheritLocale: true
});

const router = useRouter();
const localePath = useLocalePath();

const store = useStore();


const currentPost = ref<Post | null>(null);

const setCurrentPost = (post: Post) => {
    currentPost.value = unref(post);
}

const getCategories = (categories: Array<Category>) => {
    return categories?.map(obj => getTranslation(obj, locale.value)?.name).join(', ') ?? "";
}

const closeButton: Ref<HTMLButtonElement | null> = ref(null);

const showProject = (post: Post | null) => {
    if (!post) return;
    const translation = getTranslation(unref(post), locale.value);
    if (!translation) return;
    const url = translation?.externalUrl;
    if (!url) return;

    closeButton.value?.click();

    if (post.isStandalone) {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        const path = localePath({
            path: '/portfolios/see',
            query: { url: encodeURI(url) }
        });
        router.push(path);
    }
}

const posts = ref<Array<Post>>([]);


watchEffect(async () => {
    if (store.user?.id) {
        const id = store.user?.id
        const items = props?.items ? props?.items : 20;
        const {data} = await useApi<Array<Post>>(generateUrl(`${ApiRoutesWithoutPrefix.POSTS}`, {
            author: id,
            "type": 1,
            // "type.name":"project",
            isEnabled: true,
            itemsPerPage: items
        }));
        posts.value = unref(data) ?? []
    } else {
        posts.value = []
    }
})


</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>