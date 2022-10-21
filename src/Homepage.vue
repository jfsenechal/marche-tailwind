<script setup>
import { ref } from "vue";
import HomeSearch from "@/components/Homepage/HomeSearch.vue";
import News from "@/components/Homepage/News.vue";
import Agenda from "@/components/Homepage/Agenda.vue";
import Widgets from "@/components/Homepage/Widgets.vue";
import Footer from "@/components/Footer/Footer.vue";
import Partners from "@/components/Homepage/Partners.vue";
import Header from "@/components/Header/Header.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch @open-search="updateSearch" :searchIsOpen="searchIsOpen" />
  <HomeSearch />
  <main>
    <section class="mx-2 mx-auto grid grid-cols-1 xl:mx-40 xl:grid-cols-[60%,40%] xl:gap-4">
      <div>
        <News />
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
