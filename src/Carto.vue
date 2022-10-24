<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/Header/Header.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";
//to save css
const icones = ["i-book", "i-school", "i-healthcase", "i-leaf", "i-beach-ball", "i-wifi", "i-flatware", "i-board", "i-bus", "i-chrono"];
const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}

const items = ref([]);

function getItems() {
  fetch("https://www.marche.be/api/carto.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      items.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getItems();
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
      Carte dynamique
    </h2>

    <details v-for="(item, index) in items" :key="index" class="border border-cta-dark open:bg-cta-dark open:text-white">
      <summary class="list-none	flex items-center cursor-pointer">
        <i
          class="mesicones block h-12 w-12 bg-[length:1.25rem_1.25rem] bg-center bg-no-repeat xl:h-14 xl:w-14 xl:bg-[length:2.25rem_2.25rem]"
          :class="item.icone"
        >
        </i>
        <span>{{ item.name }}</span>
      </summary>
      <ul class="bg-greylight">
        <li v-for="(child, index2) in item.elements" :key="child.id"
            class="p-4">
          {{ child.name }}
        </li>
      </ul>
    </details>

  </main>
  <Footer />
</template>
<style>
</style>
