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
    class="showme fixed top-[4.3rem] left-0 right-0 bottom-auto z-10 grid hidden grid-cols-2 overflow-hidden bg-cta-dark transition-all duration-500"
    id="menuVivre"
  >
    <div class="py-4">
      <ul class="flex flex-col items-start">
        <li
          v-for="item in items"
          :key="item.id"
          class="flex w-full flex-col items-end font-montserrat-semi-bold leading-8 text-white hover:bg-white"
          :class="item.color"
        >
          <a
            href="#"
            class="mr-6 whitespace-nowrap text-left"
            @click="setActive(item.id)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="grid bg-white">
      <ul
        v-for="item in items"
        :key="item.id"
        :data-menu-id="item.id"
        :id="'menu' + item.id"
        v-show="state === item.id"
        class="col-start-1 col-end-2 row-start-1 row-end-2 px-4 py-4"
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
</template>
