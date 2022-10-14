<script setup>
import { ref } from "vue";

const shortCutOpen = ref(false);
</script>
<template>
  <nav class="musshadow fixed bottom-0 top-auto right-0 left-0 xl:hidden">
    <ul
      class="zer grid grid-cols-4 items-center justify-evenly bg-cta-dark text-white"
    >
      <li>
        <a href="/" class="icon-menu-mobile">
          <i
            style="font-size: 1.5rem"
            class="fa fa-home"
            aria-hidden="true"
          ></i>
          <span class="text-menu-mobile">Accueil</span>
        </a>
      </li>
      <li>
        <a href="#" for="more" class="icon-menu-mobile">
          <i
            style="font-size: 1.5rem"
            class="fa fa-bars"
            aria-hidden="true"
          ></i>
          <span class="text-menu-mobile">Menu</span>
        </a>
      </li>
      <li>
        <a
          href="/administration/contacter-la-commune/"
          class="icon-menu-mobile"
        >
          <i
            style="font-size: 1.5rem"
            class="fa fa-phone"
            aria-hidden="true"
          ></i>
          <span class="text-menu-mobile">Ma Commune</span>
        </a>
      </li>
      <li>
        <input type="checkbox" id="checkboxShortCut" />
        <ul
          class="absolute bottom-16 -ml-8 flex max-h-0 flex-col items-start justify-center overflow-hidden bg-white p-0 shadow-2xl transition-all duration-700"
        >
          <li>
            <a href="/" class="inline-block leading-8 text-cta-dark"
              >E-guichet</a
            >
          </li>
          <li>
            <a href="/" class="leading-8 text-cta-dark">Actualités</a>
          </li>
          <li>
            <a href="/" class="leading-8 text-cta-dark">Agenda</a>
          </li>
          <li>
            <a href="/" class="leading-8 text-cta-dark">Prendre Rdv</a>
          </li>
        </ul>
        <label for="checkboxShortCut" class="icon-menu-mobile cursor-pointer">
          <i
            style="font-size: 1.5rem"
            class="fa fa-plane"
            aria-hidden="true"
          ></i>
          <span class="text-menu-mobile">Raccourcis</span>
        </label>
      </li>
    </ul>
  </nav>
</template>
<style>
.icon-menu-mobile {
  @apply my-4 flex flex-col flex-wrap items-center justify-center font-montserrat-semi-bold;
}

.text-menu-mobile {
  @apply text-xs;
}

#shortcutlink:hover ~ ul {
  @apply max-h-52 p-4;
}

#checkboxShortCut:checked ~ ul {
  @apply max-h-52 p-4;
}

.musshadow {
  box-shadow: 0 -0.125rem 0.45rem rgba(0, 0, 0, 0.75);
}

#checkboxShortCut {
  display: none;
}
</style>
