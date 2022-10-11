<script setup>
import { ref } from "vue";
import HomeSearch from "@/components/Home/HomeSearch.vue";
import Actu from "@/components/Home/Actu.vue";
import Agenda from "@/components/Home/Agenda.vue";
import Widgets from "@/components/Home/Widgets.vue";
import Footer from "@/components/Footer/Footer.vue";
import Partners from "@/components/Home/Partners.vue";
import Header from "@/components/Header/Home/Header.vue";
import PopupSearch from "@/components/Header/PopupSearch.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch :searchIsOpen="searchIsOpen" />
  <HomeSearch />
  <main>
    <section class="mx-2 xl:mx-40 mx-auto grid grid-cols-1 xl:grid-cols-[60%,40%] xl:gap-4">
      <div>
        <Actu />
      </div>
      <div class="shadow-lg">
        <Agenda />
      </div>
    </section>
    <section>
      <Widgets />
    </section>
    <section>
      <Partners />
    </section>
  </main>
  <Footer />
</template>
