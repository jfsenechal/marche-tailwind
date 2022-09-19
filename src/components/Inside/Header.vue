<script setup>
import HeaderSocial from "@/components/Inside/HeaderSocial.vue";
import Navigation from "@/components/Inside/Navigation.vue";
</script>
<template>
  <header class="w-full h-8 p-6 shadow-2xl flex justify-end items-center">
    <Navigation/>
    <HeaderSocial/>
    <!-- <nav>
      <ul class="flex gap-2 justify-end list-none">
        <li>
          <a href="#home" class="no-underline">Home</a>
        </li>
        <li>
          <a href="#products" class="no-underline">Products</a>
        </li>
        <li>
          <a href="#pricing" class="no-underline">Pricing</a>
        </li>
        <li>
          <a href="#about" class="no-underline">About</a>
        </li>
      </ul>
    </nav> -->
  </header>
</template>