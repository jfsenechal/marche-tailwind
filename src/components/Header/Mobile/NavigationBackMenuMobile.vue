<script setup>
const { item } = defineProps(["item"]);
const emit = defineEmits(["toggle-sub-menu"]);

function backMenu() {
  if (item.blogid > 0) {
    emit("toggle-sub-menu", item.blogid, "close");
  }
}
</script>
<template>
  <h3
    :class="'text-lg pl-6 pt-6 font-montserrat-semi-bold xl:hidden ' + item.color">
    <slot></slot>
  </h3>
  <a href="/"
     class="flex w-full flex-row items-center pl-6 py-4 xl:hidden"
     @click.prevent="backMenu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor"
         class="w-6 h-6 text-cta-light">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    <span class="text-cta-dark">Retour sur Vivre à Marche</span>
  </a>
</template>