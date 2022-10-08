<script setup>
defineEmits(["open-search"]);

import NavigationVivre from "@/components/Header/Home/NavigationVivre.vue";
import IconMenuVivreSvg from "@/components/Header/Home/IconMenuVivreSvg.vue";</script>
<template>
  <ul class="ml-auto flex" id="navigationTop">
    <li class="nav-top font-montserrat-semi-bold displaymenu transition-all duration-500">
      <a href="#">
        <IconMenuVivreSvg />
        Vivre à Marche
      </a>
      <NavigationVivre />
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
    <li class="nav-top font-montserrat-semi-bold">
      <button @click="$emit('open-search')"><i class="fa fa-search"></i></button>
    </li>
  </ul>
</template>
<style>
li.nav-top {
  @apply p-3 text-cta-dark
  transition-shadow duration-300 ease-in-out
  hover:shadow-menutop;
}
</style>