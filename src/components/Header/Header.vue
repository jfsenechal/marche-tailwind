<script setup>
import Navigation from "@/components/Header/Navigation.vue";
import IconesSocial from "@/components/Header/IconesSocial.vue";
import IconeSearchHeaderMobile from "@/components/Header/IconeSearchHeaderMobile.vue";

const emit = defineEmits(["open-search","close-search"]);

function updateOpenSearch() {
  emit("open-search");
}
function closeSearch() {
  emit("close-search");
}
</script>
<template>
  <header
    class="fixed flex h-20 w-full items-center justify-end p-6 bg-white shadow-md"
    id="headerTop"
  >
    <a href="/" class="xl:mr-auto">
      <img src="images/img_logo.png" alt="logo" class="h-10 w-16 xl:h-14 xl:w-24" />
    </a>
    <Navigation @close-search=closeSearch @open-search="updateOpenSearch" />
    <IconeSearchHeaderMobile @open-search="updateOpenSearch" />
    <IconesSocial />
  </header>
</template>
