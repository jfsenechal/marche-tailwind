<script setup>
import NavigationVivre from "@/components/Header/Home/NavigationVivre.vue";
import IconMenuVivreSvg from "@/components/Header/Home/IconMenuVivreSvg.vue";

defineEmits(["open-search"]);
</script>
<template>
  <nav>
    <ul class="hidden xl:flex" id="navigationTop">
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
        <a href="/" @click.prevent="$emit('open-search')">
          <i class="fa fa-search"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style>
li.nav-top {
  @apply p-3 text-cta-dark
  transition-shadow duration-300 ease-in-out
}

li.nav-top:hover {
  box-shadow: 0 -3px 0 0 #4ae0c7 inset;
}

.displaymenu:hover .showme {
  display: grid;
}
</style>