<script setup>
import Icones from "@/components/Home/Icones.vue";
import HomeSearch from "@/components/Home/HomeSearch.vue";
import Actu from "@/components/Home/Actu.vue";
import Agenda from "@/components/Home/Agenda.vue";
</script>

<template>
  <!--<main class="w-full mx-auto h-screen grid place-content-center">-->
  <HomeSearch/>
  <section class="max-w-7xl mx-auto grid grid-cols-2 py-16">
    <Actu/>
    <Agenda/>
  </section>
  <!--</main>-->
</template>
