<script setup>
import ShortCutMenuMobile from "@/components/Header/Mobile/ShortCutMenuMobile.vue";</script>
<template>
  <li class="xl:hidden">
    <a
      href="/administration/contacter-la-commune/"
      class="icon-menu-mobile"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      <span class="text-menu-mobile">Commune</span>
    </a>
  </li>
  <li class="xl:hidden">
    <input type="checkbox" id="checkboxShortCut" />
    <ShortCutMenuMobile />
    <label for="checkboxShortCut" class="icon-menu-mobile cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      <span class="text-menu-mobile">Raccourcis</span>
    </label>
  </li>
</template>
<style>

#checkboxShortCut:checked ~ div {
  @apply opacity-100;
}

#checkboxShortCut {
  display: none;
}
</style>