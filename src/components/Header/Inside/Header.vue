<script setup>
import Navigation from "@/components/Header/Inside/Navigation.vue";
import IconesSocial from "@/components/Header/Inside/IconesSocial.vue";
</script>
<template>
  <header class="flex h-14 w-full items-center justify-end p-6 shadow-2xl">
    <img src="images/img_logo.png" alt="logo" class="h-14 w-24" />
    <Navigation />
    <IconesSocial />
  </header>
</template>
