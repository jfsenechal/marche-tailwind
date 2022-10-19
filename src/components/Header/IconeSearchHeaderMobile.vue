<script setup>
defineEmits(["open-search"]);
</script>
<template>
  <a href="#" @click.prevent="$emit('open-search')" for="more" class="icon-menu-mobile2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </a>
</template>

<style>
.icon-menu-mobile2 {
  @apply my-4 w-full flex xl:hidden items-center justify-center font-montserrat-semi-bold text-sante;
}

.text-menu-mobile2 {
  @apply text-xs;
}
</style>