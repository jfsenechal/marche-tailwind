<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/Header/Header.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}

const actus = ref([]);

function getNews() {
  fetch("https://www.marche.be/api/actus.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      actus.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getNews();
});
</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch @open-search="updateSearch" :searchIsOpen="searchIsOpen" />
  <main class="container px-4 mt-24 xl:mt-28 mx-auto mb-8">
    <div class="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="text-cta-light w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <a href="/" class="ml-2 font-montserrat-semi-bold text-cta-light">
        Retour à l'accueil</a>
    </div>

    <h2 class="font-montserrat-semi-bold text-base xl:text-xl leading-7 text-cta-dark">
      Actualités
    </h2>

    <ul class="pt-6 grid grid-cols-1 gap-2 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
      <li
        v-for="item in actus"
        :key="item.ID"
        class=" rounded-lg shadow-lg"
      >
        <a
          href="{{item.url}}"
          class="group grid grid-cols-1 xl:grid-cols-2 overflow-hidden xl:block"
        >
          <img
            :src="item.post_thumbnail_url"
            alt=""
            class="justify-self-center self-center h-32 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-40"
          />
          <div class="ml-2 flex flex-col items-start justify-between h-36 py-2 xl:py-4 xl:px-4">
            <h3
              class="xl:text-md xl:font-montserrat-semi-bold text-md text-cta-dark group-hover:text-cta-light"
            >
              {{ item.post_title }}
            </h3>
            <span class="text-greydark text-sm font-montserrat-light">{{ item.post_excerpt }}</span>
            <span
              :class="
              'my-1 block font-montserrat-medium text-xs xl:text-base ' +
              item.colorTailwind">
            {{ item.blog }}
          </span>
          </div>
        </a>
      </li>
    </ul>
  </main>
  <Footer />
</template>
