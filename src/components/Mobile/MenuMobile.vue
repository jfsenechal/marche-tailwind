<script setup>
import { ref } from "vue";

const shortCutOpen = ref(false);
</script>
<template>
  <nav class="fixed bottom-0 top-auto right-0 left-0">
    <ul class="flex justify-evenly items-center bg-cta-dark text-white">
      <li class="">
        <a href="/" class="icon-menu-mobile">
          <i style="font-size: 1.5rem;" class="fa fa-home" aria-hidden="true"></i>
          <span class="text-menu-mobile">Accueil</span>
        </a>
      </li>
      <li>
        <a href="#" id="btn-open-search" class="icon-menu-mobile">
          <i style="font-size: 1.5rem;" class="fa fa-search"></i>
          <span class="text-menu-mobile">Rechercher</span>
        </a>
      </li>
      <li>
        <a href="#" for="more" class="icon-menu-mobile">
          <i style="font-size: 1.5rem;" class="fa fa-bars" aria-hidden="true"></i>
          <span class="text-menu-mobile">Menu</span>
        </a>
      </li>
      <li>
        <a href="/administration/contacter-la-commune/" class="icon-menu-mobile">
          <i style="font-size: 1.5rem;" class="fa fa-phone" aria-hidden="true"></i>
          <span class="text-menu-mobile">Horaires-Contacts</span>
        </a>
      </li>
      <li>
        <input type="checkbox" id="checkboxShortCut">
        <ul class="absolute -ml-4 bottom-16 p-0 bg-pink-200 flex flex-col justify-center items-start
         transition-all duration-700 max-h-0 overflow-hidden">
          <li>
            <a href="/" class="leading-8 inline-block">E-guichet</a>
          </li>
          <li>
            <a href="/" class="leading-8">Actualités</a>
          </li>
          <li>
            <a href="/" class="leading-8">Agenda</a>
          </li>
          <li>
            <a href="/" class="leading-8">Prendre Rdv</a>
          </li>
        </ul>
        <label for="checkboxShortCut" class="icon-menu-mobile cursor-pointer">
            <i style="font-size: 1.5rem;" class="fa fa-plane" aria-hidden="true"></i>
            <span class="text-menu-mobile">Raccourcis</span>
        </label>
      </li>
    </ul>
  </nav>
</template>
<style>
.icon-menu-mobile {
  @apply my-4 flex flex-col flex-wrap justify-center items-center font-montserrat-semi-bold
}

.text-menu-mobile {
  @apply text-base
}

#shortcutlink:hover ~ ul {
  @apply max-h-60 p-8;
}

#checkboxShortCut:checked ~ ul {
  @apply max-h-60 p-8;
}

#checkboxShortCut {
  display: none;
}

</style>