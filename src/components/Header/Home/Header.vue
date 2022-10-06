<script setup>
import Navigation from "@/components/Header/Home/Navigation.vue";
import IconesSocial from "@/components/Header/Home/IconesSocial.vue";
import NavigationItems from "@/components/Header/Home/NavigationItems.vue";
</script>
<template>
  <header class="flex h-14 w-full items-center justify-end p-6">
    <img src="images/img_logo.png" alt="logo" class="h-14 w-24" />
    <Navigation />
    <IconesSocial />
  </header>
</template>