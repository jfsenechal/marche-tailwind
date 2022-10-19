<script setup>
import NavigationVivre from "@/components/Header/NavigationVivre.vue";
import IconMenuVivreSvg from "@/components/Header/IconMenuVivreSvg.vue";
import NavIconHomeMobile from "@/components/Header/Navigation/NavIconHomeMobile.vue";
import NavIconSearchMobile from "@/components/Header/Navigation/NavIconSearchMobile.vue";
import NavIconCommuneShortCutMobile from "@/components/Header/Navigation/NavIconCommuneShortCutMobile.vue";
import NavItemsXl from "@/components/Header/Navigation/NavItemsXl.vue";

defineEmits(["open-search"]);

function updateOpenSearch() {
  emit("open-search");
}

function toggleMainMenu() {
  console.log("dfdfdf");
  const menu = document.querySelector("#main-menu");
  console.log(menu.style.display);
  menu.style.display = "block";
  console.log(menu.style.display);
  console.log(menu);
}
</script>
<template>
  <nav class="musshadow fixed bottom-0 top-auto right-0 left-0 xl:static xl:shadow-none">
    <ul class="grid grid-cols-5 items-center justify-evenly bg-cta-dark text-white xl:flex xl:bg-white xl:text-cta-dark"
        id="navigationTop">
      <NavIconHomeMobile />
      <NavIconSearchMobile />
      <li
        class="nav-top xl:font-montserrat-semi-bold xl:transition-all xl:duration-500 btn-vivre">
        <a href="#" class="hidden xl:flex">
          <IconMenuVivreSvg />
          Vivre à Marche
        </a>
        <label for="checkboxMenu" class="xl:hidden icon-menu-mobile cursor-pointer">
          <button name="menu" @click="toggleMainMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <span class="text-menu-mobile">Menu</span>
        </label>
        <NavigationVivre />
      </li>
      <NavIconCommuneShortCutMobile />
      <NavItemsXl @open-search="updateOpenSearch" />
    </ul>
  </nav>
</template>
<style>

li.nav-top {
  @apply xl:p-3 xl:text-cta-dark
  xl:transition-shadow xl:duration-300 xl:ease-in-out;
}

li.nav-top:hover {
  box-shadow: 0 -3px 0 0 #4ae0c7 inset;
}

.btn-vivre:hover > nav {
  @apply xl:block
}

.icon-menu-mobile {
  @apply my-4 flex flex-col flex-wrap items-center justify-center font-montserrat-semi-bold;
}

.text-menu-mobile {
  @apply text-xs font-montserrat-light;
}

#checkboxMenu:checked ~ nav {
  @apply block;
}

.musshadow {
  box-shadow: 0 -0.125rem 0.45rem rgba(0, 0, 0, 0.75);
}
</style>
