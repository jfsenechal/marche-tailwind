<script setup>
import { defineEmits } from "vue";
import Navigation from "@/components/Header/Navigation.vue";
import IconesSocial from "@/components/Header/IconesSocial.vue";
import IconeSearchHeaderMobile from "@/components/Mobile/IconeSearchHeaderMobile.vue";

const emit = defineEmits(["open-search"]);

function updateOpenSearch() {
  emit("open-search");
}
</script>
<template>
  <header
    class="fixed flex h-20 w-full items-center justify-end p-6 bg-white shadow-xl"
    id="headerTop"
  >
    <img src="images/img_logo.png" alt="logo" class="xl:mr-auto h-10 w-16 xl:h-14 xl:w-24" />
    <Navigation @open-search="updateOpenSearch" />
    <IconeSearchHeaderMobile @open-search="updateOpenSearch" />
    <IconesSocial />
  </header>
</template>
