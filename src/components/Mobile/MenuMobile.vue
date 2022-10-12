<script setup>
import { ref } from "vue";

const shortCutOpen = ref(false);
</script>
<template>
  <nav class="fixed bottom-0 top-auto right-0 left-0 musshadow xl:hidden">
    <ul class="flex justify-evenly items-center bg-cta-dark text-white">
      <li class="">
        <a href="/" class="icon-menu-mobile">
          <i style="font-size: 1.5rem;" class="fa fa-home" aria-hidden="true"></i>
          <span class="text-menu-mobile">Accueil</span>
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
          <span class="text-menu-mobile">La Commune</span>
        </a>
      </li>
      <li>
        <input type="checkbox" id="checkboxShortCut">
        <ul class="absolute -ml-8 bottom-16 p-0 bg-white shadow-2xl flex flex-col justify-center items-start
         transition-all duration-700 max-h-0 overflow-hidden">
          <li>
            <a href="/" class="text-cta-dark leading-8 inline-block">E-guichet</a>
          </li>
          <li>
            <a href="/" class="text-cta-dark leading-8">Actualités</a>
          </li>
          <li>
            <a href="/" class="text-cta-dark leading-8">Agenda</a>
          </li>
          <li>
            <a href="/" class="text-cta-dark leading-8">Prendre Rdv</a>
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
  @apply text-xs
}

#shortcutlink:hover ~ ul {
  @apply max-h-52 p-4;
}

#checkboxShortCut:checked ~ ul {
  @apply max-h-52 p-4;
}

.musshadow {
  box-shadow: 0 -0.125rem .45rem rgba(0, 0, 0, .75);
}

#checkboxShortCut {
  display: none;
}

</style>