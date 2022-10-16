<script setup>
import { ref } from "vue";
import { items } from "@/items";

const state = ref(4);

function setActive(id) {
  state.value = id;
}
</script>

<template>
  <div class="bg-cta-dark fixed inset-0 m-au45to overflow-hidden w-full">
    <ul class="flex flex-col items-stretch justify-start h-auto box-border max-w-[50%]">
      <li
        v-for="item in items"
        :data-top-id="item.id"
        :key="item.id"
        class="pi flex flex-col basis-full border border-red-600 gr45oup hover:bg-white font-montserrat-semi-bold leading-8 text-white"
        :class="item.color">
        <a href="/" class="mr-6 whitespace-nowrap ml-auto">{{ item.title }}</a>
        <div
          :data-menu-id="item.id"
          class="absolute top-0 bottom-0 left-1/2 right-0 border border-amber-500 group-hover:bg-white">
          <ul class="w-full p-8">
            <li
              v-for="child in item.childs"
              :key="child.id"
              :class="item.color">
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
li[data-top-id='4']:hover > div {
  background-color: red;
}
.max-w-inerit {
  max-width: inherit;
}

#checkboxMain:checked ~ div.sousitems {
  @apply left-0;
}

#checkboxMain {

}
</style>