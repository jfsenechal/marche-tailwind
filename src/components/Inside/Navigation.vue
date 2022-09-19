<script setup>

</script>
<style>
li.nav-top {
  @apply p-3 text-cta-dark
  transition-shadow duration-300 ease-in-out
  hover:shadow-menutop
}
</style>
<template>
  <ul class="lg:flex">
    <li class="nav-top">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
      <a href="#">Vivre à Marche</a>
    </li>
    <li class="nav-top">
      <a href="#">E-guichet</a>
    </li>
    <li class="nav-top">
      <a href="#">Actualités</a>
    </li>
    <li class="nav-top">
      <a href="#">Horaires-Contact</a>
    </li>
    <li class="nav-top">
      <a href="#">Agenda</a>
    </li>
    <li class="nav-top">
      <a href="#">Inondation</a>
    </li>
  </ul>
  <div class="flex lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
</template>