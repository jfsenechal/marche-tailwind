<script setup>
import NavigationVivre from "@/components/Header/Home/NavigationVivre.vue";
import IconMenuVivreSvg from "@/components/Header/Home/IconMenuVivreSvg.vue";

defineEmits(["open-search"]);
</script>
<template>
  <nav>
    <ul class="hidden xl:flex" id="navigationTop">
      <li
        class="nav-top displaymenu font-montserrat-semi-bold transition-all duration-500"
      >
        <a href="#">
          <IconMenuVivreSvg />
          Vivre à Marche
        </a>
        <NavigationVivre />
      </li>
      <li class="nav-top font-montserrat-semi-bold text-cta-dark">
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
        <a href="/" @click.prevent="$emit('open-search')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style>
li.nav-top {
  @apply p-3 text-cta-dark
  transition-shadow duration-300 ease-in-out;
}

li.nav-top:hover {
  box-shadow: 0 -3px 0 0 #4ae0c7 inset;
}

.displaymenu:hover .showme {
  display: grid;
}
</style>
