<script setup>
import { ref } from "vue";
import { items } from "@/items";

const state = ref(0);

function setActive(id) {
  state.value = id
}
</script>

<template>
  <div class="grid grid-cols-2 bg-slate-500">

    <div class="bg-red-500">
      <ul class="flex flex-col items-start pr-14">
        <li v-for="item in items"
            :key="item.id"
            class="flex flex-col items-end w-full leading-relaxed font-montserrat-semi-bold text-white hover:bg-white"
            :class="item.color"
        >
          <a href="#"
             class="text-left pl-[760px] pr-[36px] whitespace-nowrap"
             @click="setActive(item.id)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="grid bg-yellow-500">
      <ul v-for="item in items"
          :key="item.id"
          :data-menu-id="item.id"
          class="col-start-1 col-end-2 row-start-1 row-end-2"
          :id="'menu'+item.id"
          v-show="state === item.id"
      >
        <li v-for="child in item.childs">
          {{ child.title }}
        </li>
      </ul>
    </div>
  </div>
</template>