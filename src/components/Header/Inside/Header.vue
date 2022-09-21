<script setup>
import Navigation from "@/components/Header/Inside/Navigation.vue";
import IconesSocial from "@/components/Header/Inside/IconesSocial.vue";
</script>
<template>
  <header class="w-full h-14 p-6 shadow-2xl flex justify-end items-center">
    <img src="public/images/img_logo.png" alt="logo" class="w-24 h-14">
    <Navigation/>
    <IconesSocial/>
   </header>
</template>