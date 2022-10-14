<script setup>
defineEmits(["open-search"]);
</script>
<template>
<a href="#" for="more" class="icon-menu-mobile2">
          <i
            style="font-size: 1.5rem"
            class="fa fa-search"
            aria-hidden="true"
          ></i>
          <span class="text-menu-mobile2">Rechercher</span>
        </a>
</template>

<style>
.icon-menu-mobile2 {
  @apply my-4 flex items-center justify-center font-montserrat-semi-bold text-sante;
}
.text-menu-mobile2 {
  @apply text-xs;
}
</style>
