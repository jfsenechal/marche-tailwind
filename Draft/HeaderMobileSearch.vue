<script setup>
defineEmits(["open-search"]);
</script>
<template>
  <div class="absolute top-20 w-screen h-24 py-6 bg-white">
    <form
      name="searching"
      class="mx-auto flex items-center justify-center xl:hidden"
    >
      <label class="block" for="search">
        <span class="sr-only">echercher</span>
      </label>
      <input
        type="search"
        id="search"
        name="s"
        autocomplete="off"
        placeholder="Rechercher"
        class="mx-4 w-full rounded-full border border-gray-300 font-light leading-5
        text-teal-300 placeholder:italic placeholder:text-gray-400"
      />
    </form>
  </div>

</template>
