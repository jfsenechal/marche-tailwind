<script setup>
import HomeSearch from "@/components/Home/HomeSearch.vue";
import Actu from "@/components/Home/Actu.vue";
import Agenda from "@/components/Home/Agenda.vue";
import Widgets from "@/components/Home/Widgets.vue";
import Footer from "@/components/Footer/Footer.vue";
import Partners from "@/components/Home/Partners.vue";
import Header from "@/components/Header/Home/Header.vue";
</script>

<template>
  <!--<main class="w-full mx-auto h-screen grid place-content-center">-->
  <Header/>
  <HomeSearch/>
  <section class="mx-40 mx-auto grid grid-cols-[60%,40%]">
    <div>
      <Actu/>
    </div>
    <div class="shadow-lg">
      <Agenda/>
    </div>
  </section>
  <section>
    <Widgets/>
  </section>
  <section>
    <Partners/>
  </section>
  <Footer/>
  <!--</main>-->
</template>
