<script setup>
import { defineEmits } from "vue";
import Navigation from "@/components/Header/Home/Navigation.vue";
import IconesSocial from "@/components/Header/Home/IconesSocial.vue";
import HeaderSearch from "@/components/Mobile/HeaderSearch.vue";

const emit = defineEmits(['open-search'])

function updateOpenSearch() {
  emit("open-search")
}
</script>
<template>
  <header class="flex h-20 w-full items-center justify-end p-6 shadow-xl z-10 relative" id="headerTop">
    <img src="images/img_logo.png" alt="logo" class="h-14 w-24 mr-auto" />
    <Navigation @open-search="updateOpenSearch" />
    <HeaderSearch/>
    <IconesSocial />
  </header>
</template>