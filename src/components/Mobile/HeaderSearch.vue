<script setup>
defineEmits(["open-search"]);
</script>
<template>
    <form name="searching" class="flex items-center justify-center xl:hidden mx-auto">
      <label class="block" for="search">
        <span class="sr-only">Rechercher</span>
      </label>
      <input
        type="search"
        id="search"
        name="s"
        autocomplete="off"
        placeholder="Rechercher"
        class="w-full mx-4 rounded-full border border-gray-300 font-light leading-5 text-teal-300 placeholder:italic placeholder:text-gray-400 "
      />
    </form>
</template>