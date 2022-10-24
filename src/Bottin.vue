<script setup>
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import Titre from "@/components/Article/Titre.vue";
import Share from "@/components/Article/Share.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
import Tags from "@/components/Article/Tags.vue";
import Body from "@/components/Article/Body.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";
import Encare from "@/components/Bottin/Encare.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch @open-search="updateSearch" :searchIsOpen="searchIsOpen" />
  <article
    class="container grid grid-cols-1 xl:grid-cols-3 items-start mt-24 xl:mt-28 mx-auto place-content-center px-4">
    <Titre />
    <Encare />
    <Tags />
    <Body />
    <Share />
    <SeeAlso />
  </article>
  <Footer />
</template>
