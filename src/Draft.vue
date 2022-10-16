<script setup>
import { ref } from "vue";
import { items } from "@/items";
</script>

<template>
  <div class="bg-cta-dark fixed inset-0 m-au45to overflow-hidden w-full">
    <ul class="flex flex-col items-stretch justify-start h-auto box-border max-w-[50%]">
      <li
        v-for="item in items"
        :data-top-id="item.id"
        :key="item.id"
        class="py-1 pi flex flex-col basis-full border border-red-600 gr45oup hover:bg-white font-montserrat-semi-bold leading-8 text-white"
        :class="item.color">
        <a href="/" class="mr-6 whitespace-nowrap ml-auto">{{ item.title }}</a>
        <div
          :data-menu-id="item.id"
          class="hidden absolute top-0 bottom-0 left-1/2 right-0 border border-amber-500 group-hover:bg-white">
          <ul class="w-full p-8">
            <li
              v-for="child in item.childs"
              :key="child.id"
              class="text-cta-dark">
              {{ child.title }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
li.pi {
  position: initial;
}
li[data-top-id='1']:hover > div,
li[data-top-id='2']:hover > div,
li[data-top-id='3']:hover > div,
li[data-top-id='4']:hover > div,
li[data-top-id='5']:hover > div,
li[data-top-id='6']:hover > div,
li[data-top-id='7']:hover > div,
li[data-top-id='8']:hover > div,
li[data-top-id='9']:hover > div {
  opacity: 100;
  background-color: white;
  display: block;
}
</style>