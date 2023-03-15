<template>
  <section class="ftco-section" id="blog-section">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h1 class="big big-2">Blog</h1>
          <h2 class="mb-4">Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div class="row d-flex">
        <div
          class="col-md-4 d-flex ftco-animate"
          v-for="item in items"
          :key="item.id"
        >
          <div class="blog-entry justify-content-end">
            <a
              href=""
              class="block-20"
              style="background-image: url('images/image_1.jpg');"
            >
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading">
                <a href="single.html">{{ item.title }}</a>
              </h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">{{ item.createdAt }}</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> { item.comments}</a
                  >
                </p>
              </div>
              <p>{{ item.content | truncate(50) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a
              href="single.html"
              class="block-20"
              style="background-image: url('images/image_1.jpg');"
            >
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading">
                <a href="single.html"
                  >Why Lead Generation is Key for Business Growth</a
                >
              </h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </p>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a
              href="single.html"
              class="block-20"
              style="background-image: url('images/image_2.jpg');"
            >
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading">
                <a href="single.html"
                  >Why Lead Generation is Key for Business Growth</a
                >
              </h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </p>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry">
            <a
              href="single.html"
              class="block-20"
              style="background-image: url('images/image_3.jpg');"
            >
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading">
                <a href="single.html"
                  >Why Lead Generation is Key for Business Growth</a
                >
              </h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2"></a>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </p>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const GET_URL = "https://127.0.0.1:8000/api/contactuses";
import axios from "axios";

export default {
  name: "BlogCard",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getBlogItem();
  },
  updated() {
    this.getBlogItem();
  },

  methods: {
    truncate(chaine, offset, length) {
      if (typeof length == "undefined") {
        length = 70;
      }
      if (chaine.length < +length) {
        return chaine;
      } else {
        return chaine.substring(offset, length) + "...";
      }
    },
    getBlogItem() {
      axios
        .get(GET_URL, { responseType: "json" })
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped></style>
