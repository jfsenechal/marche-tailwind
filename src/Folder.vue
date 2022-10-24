<script setup>
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";
import Categories from "@/components/Folder/Categories.vue";
import Posts from "@/components/Folder/Posts.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
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
      Cultes – Laïcité – Cimetières
    </h2>

    <Categories />
    <Posts />

  </main>
  <Footer />
</template>
