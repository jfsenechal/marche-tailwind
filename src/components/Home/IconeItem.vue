<script setup>
defineProps({
  title: String,
  icon: String,
  iconHover: String,
});
</script>
<template>
  <li
    class="group flex flex-shrink-0 flex-grow-0 basis-1/4 justify-center text-center"
  >
    <a href="/sport/piscine-communale" class="icon_custom">
      <i
        class="i-bg-color-transition mx-auto block h-14 w-14 rounded-full bg-white bg-[length:2.25rem_2.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-blue-light"
        :class="icon + ' group-hover:' + iconHover"
      >
      </i>
      <span
        class="mx-auto inline-block pt-3 font-montserrat-bold leading-4 text-white"
        >{{ title }}</span
      >
    </a>
  </li>
</template>
