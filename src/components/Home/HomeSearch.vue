<!-- https://play.tailwindcss.com/SvBc6xaRWJ -->
<script setup>
import FormSearch from "@/components/Home/FormSearch.vue"
import Icons from "@/components/Home/Icones.vue";
import Wave from "@/components/Home/Wave.vue";
</script>
<template>
  <section
    class="bghome-image flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-bottom bg-no-repeat"
  >
    <h1 class="pb-8 pt-24 text-center font-montserrat-semi-bold text-2xl text-white">
      Bienvenue à Marche-en-Famenne
    </h1>
    <FormSearch/>
    <Icons />
    <Wave />
  </section>
</template>
<style>
.bghome-image {
  background-image: linear-gradient(
    90deg,
    rgba(1, 31, 22, 0.38),
    rgba(0, 75, 142, 0.38)
  ),
  url(../images/bh_home.jpg);
}
</style>