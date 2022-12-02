<script setup>
import { ref } from "vue";
import { items } from "@/items";

const state = ref(4);

function setActive(id) {
  state.value = id;
}
</script>

<template>
  <div
    class="relative grid grid-cols-1 top-0 bottom-0 left-0 right-0 z-10 bg-cta-dark h-full transition-all duration-500"
    id="menuVivre45"
  >
    <div class="p-4 col-start-1 col-end-2 row-start-1 row-end-2">
      <h3 class="flex justify-between mb-4 text-white font-montserrat-semi-bold text-xl">
        <span>Vivre à Marche</span>
        <button class="w-32 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </h3>
      <ul class="flex flex-col items-start justify-start">
        <li
          v-for="item in items"
          :key="item.id"
          class="flex w-full flex-col itemslm-end font-montserrat-semi-bold leading-10 text-white hover:bg-white"
          :class="item.color"
        >
          <input type="checkbox" id="checkboxMain" />
          <a
            href="#"
            class="mr-6 py-2 whitespace-nowrap text-left flex justify-between"
            @click.prevent="setActive(item.id)"
          >
            {{ item.title }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <!-- placer ici sous element pour css -->
          <!-- sinon faut faire javascript -->
        </li>
      </ul>
    </div>
    <div class="sousitems transition-all duration-700 grid bg-white h-full relative left-96 col-start-1 col-end-2 row-start-1 row-end-2">
      <div class="p-4 col-start-1 col-end-2 row-start-1 row-end-2"
           v-for="item in items"
           :key="item.id"
           :data-menu-id="item.id"
           :id="'menu' + item.id"
           v-show="state === item.id">
        <h3 class="text-xl text-administration font-montserrat-semi-bold mb-2">{{ item.title }}</h3>
        <a href="/" class="flex flex-row items-center justify-around mt-3" mb-2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-cta-light">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span class="text-cta-dark">Retour sur Vivre à Marche</span>
        </a>
        <ul
          class="py-4"
        >
          <li
            v-for="child in item.childs"
            class="flex flex-col font-montserrat-semi-bold leading-8 text-cta-dark"
            :class="item.color"
          >
            <a href="/" class="whitespace-nowrap">
              {{ child.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
#checkboxMain:checked ~ div.sousitems {
  @apply left-0;
}

#checkboxMain {
  display: none;
}
</style>