<script setup>
import { defineEmits } from "vue";
import Navigation from "@/components/Header/Home/Navigation.vue";
import IconesSocial from "@/components/Header/Home/IconesSocial.vue";
import HeaderMobile from "@/components/Mobile/HeaderMobile.vue";
import HeaderMobileSearch from "@/components/Mobile/HeaderMobileSearch.vue";

const emit = defineEmits(["open-search"]);

function updateOpenSearch() {
  emit("open-search");
}
</script>
<template>
  <header
    class="relative z-10 flex h-20 w-full items-center justify-end p-6 shadow-xl"
    id="headerTop"
  >
    <img src="images/img_logo.png" alt="logo" class="mr-auto h-10 w-16 xl:h-14 xl:w-24" />
    <Navigation @open-search="updateOpenSearch" />
    <HeaderMobile @open-search="updateOpenSearch" />
    <IconesSocial />
  </header>
  <HeaderMobileSearch />
</template>
