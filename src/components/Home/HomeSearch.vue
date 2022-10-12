<!-- https://play.tailwindcss.com/SvBc6xaRWJ -->
<script setup>
import FormSearch from "@/components/Home/FormSearch.vue";
import IconsShortCut from "@/components/Home/IconsShortCut.vue";
import Wave from "@/components/Home/Wave.vue";
</script>
<template>
  <section
    class="bghome-image flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  >
    <h1 class="pb-6 xl:pb-8 pt-16 xl:pt-24 text-center font-montserrat-semi-bold text-2xl text-white">
      Bienvenue <span class="lg:hidden"><br /></span> à Marche-en-Famenne
    </h1>
    <FormSearch />
    <IconsShortCut />
    <Wave/>
  </section>
</template>
<style>
.bghome-image3 {
  background-image: linear-gradient(
    rgba(1, 31, 22, 0.7),
    rgba(0, 75, 142, 0.7)
  ),
  url(../images/bh_home.jpg);
}
.bghome-image {
  background-image: linear-gradient(
    90deg,
    rgba(1, 31, 22, 0.38),
    rgba(0, 75, 142, 0.38)
  ),
  url(../images/bh_home.jpg);
}
</style>