<script setup>
import { ref } from "vue";

const state = ref(4);

function setActive(id) {
  state.value = id;
}
</script>

<template>
  <div class="bg-cta-dark fixed inset-0 m-au45to overflow-hidden w-full">
    <ul class="flex items-stretch justify-start h-auto box-border max-w-[50%]">
      <li class="pi flex flex-col basis-full border border-red-600 group hover:bg-white">
        <a href="/" class="ml-auto mr-6">Administration</a>
        <div class="absolute top-0 bottom-0 left-1/2 right-0 border border-amber-500 group-hover:bg-white">
          <ul class="w-full p-8">
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