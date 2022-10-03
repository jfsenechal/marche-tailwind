<script setup>
import Icones from "@/components/Home/Icones.vue";
import Wave from "@/components/Home/Wave.vue";
</script>
<template>
  <section
      class="flex flex-col justify-center items-center w-full bghome-image bg-no-repeat bg-cover bg-bottom overflow-hidden">
    <h1 class="text-2xl text-center text-white font-montserrat-bold pb-5">Bienvenue à Marche-en-Famenne</h1>
    <form name="searching" class="flex max-w-5xl mx-auto">
      <label class="block" for="search">
        <span class="sr-only">Rechercher</span>
      </label>
      <input
          type="search"
          id="search"
          name="s"
          autocomplete="off"
          placeholder="Que cherchez-vous ?"
          class="flex-grow rounded-full bg-white pl-9 py-2 pr-16 font-light leading-5 text-teal-300
           placeholder:italic placeholder:text-gray-400 block
           border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500
               focus:ring-1">
      <button type="submit"
              class="relative right-12 top-2 pl-4 w-6 h-6 i-search bg-no-repeat bg-cover p-2">
      </button>
    </form>

    <Icones/>
    <Wave/>
  </section>
</template>
