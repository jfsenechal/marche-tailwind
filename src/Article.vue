<script setup>
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import HeaderArticle from "@/components/Article/Header.vue";
import Titre from "@/components/Article/Titre.vue";
import Body from "@/components/Article/Body.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}

</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch @open-search="updateSearch" :searchIsOpen="searchIsOpen" />
  <article class="container pt-8 xl:pt-28 mx-auto h-screen place-content-center px-4">
    <Titre />
    <HeaderArticle />
    <Body />
  </article>
  <Footer />
</template>
