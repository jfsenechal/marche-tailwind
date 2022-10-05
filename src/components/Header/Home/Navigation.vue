<script setup>
import NavigationItems from "@/components/Header/Home/NavigationItems.vue";
</script>
<template>
  <ul class="ml-auto lg:flex">
    <li class="nav-top font-montserrat-semi-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
      <a href="#">Vivre à Marche</a>
    </li>
    <li class="nav-top text-cta-dark font-montserrat-semi-bold">
      <a href="#">E-guichet</a>
    </li>
    <li class="nav-top font-montserrat-semi-bold">
      <a href="#">Actualités</a>
    </li>
    <li class="nav-top font-montserrat-semi-bold">
      <a href="#">Horaires-Contact</a>
    </li>
    <li class="nav-top font-montserrat-semi-bold">
      <a href="#">Agenda</a>
    </li>
    <li class="nav-top font-montserrat-semi-bold">
      <a href="#">Inondation</a>
    </li>
  </ul>
  <div class="flex lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </div>
</template>
<style>
li.nav-top {
  @apply p-3 text-cta-dark
  transition-shadow duration-300 ease-in-out
  hover:shadow-menutop;
}
</style>