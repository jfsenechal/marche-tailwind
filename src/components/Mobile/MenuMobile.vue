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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="text-menu-mobile">Accueil</span>
        </a>
      </li>
      <li>
        <a href="#" for="more" class="icon-menu-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span class="text-menu-mobile">Menu</span>
        </a>
      </li>
      <li>
        <a
          href="/administration/contacter-la-commune/"
          class="icon-menu-mobile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
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
