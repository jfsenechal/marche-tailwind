<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/Header/Header.vue";
import Titre from "@/components/Article/Titre.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";
import Footer from "@/components/Footer/Footer.vue";

const events = ref([]);

function getEvents() {
  fetch("https://www.marche.be/api/events.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      events.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getEvents();
});

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
      Agenda des manifestations
    </h2>

    <ul class="pt-6 grid grid-cols-1 gap-2 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
      <li
        v-for="item in events"
        :key="item.codeCgt"
        class=" rounded-lg shadow-lg"
      >
        <a
          href="{{item.url}}"
          class="group grid grid-cols-1 xl:grid-cols-2 overflow-hidden xl:block"
        >
          <img
            :src="item.images[0]"
            alt=""
            class="justify-self-center self-center h-32 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-40"
          />
          <div class="grid grid-cols-[6rem,1fr] xl:grid-cols-[8rem,1fr] my-2">
            <div
              class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
            >
          <span class="font-montserrat-semi-bold text-xl">
            {{ item.dateEvent["day"] }}
          </span>
              <span class="">{{ item.dateEvent["month"] }}</span>
              <span class="">{{ item.dateEvent["year"] }}</span>
            </div>
            <div class="flex flex-col items-start justify-center px-8">
              <span>{{ item.nom }}</span>
              <span class="text-sm text-gray-500">{{ item.locality }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </main>
  <Footer />
</template>
