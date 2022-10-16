<script setup>
import { ref } from "vue";
import { items } from "@/items";

const state = ref(4);

function setActive(id) {
  state.value = id;
}
</script>

<template>
  <div class="bg-cta-dark fixed inset-0 m-auto overflow-hidden w-full">
    <ul class="w-full items-start justify-end ml-auto h-auto box-border">
      <li class="pi max-w-[50%] flex flex-col flex-shrink-0 flex-grow-0 basis-2/5 border border-red-600 hover:bg-white">
        <a href="/">Administration</a>
        <div class="absolute top-0 bottom-0 left-1/2 m-0 right-0 border border-amber-500">
          <ul class="w-full">
            <li>un</li>
            <li>deux</li>
            <li>trois</li>
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
.max-w-inerit {
  max-width: inherit;
}
#checkboxMain:checked ~ div.sousitems {
  @apply left-0;
}

#checkboxMain {

}
</style>