<script setup>
import { ref } from "vue";
import { items } from "@/items";

const state = ref(0);

function setActive(id) {
  state.value = id;
}
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 z-10 bg-cta-dark transition-all duration-500"
    id="menuVivre"
  >
    <div class="p-4">
      <h3 class="flex justify-between mb-4">
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
          <a
            href="#"
            class="mr-6 py-2 whitespace-nowrap text-left flex justify-between"
            @click="setActive(item.id)"
          >
            {{ item.title }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
