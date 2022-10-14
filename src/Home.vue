<script setup>
import { ref } from "vue";
import HomeSearch from "@/components/Home/HomeSearch.vue";
import News from "@/components/Home/News.vue";
import Agenda from "@/components/Home/Agenda.vue";
import Widgets from "@/components/Home/Widgets.vue";
import Footer from "@/components/Footer/Footer.vue";
import Partners from "@/components/Home/Partners.vue";
import Header from "@/components/Header/Home/Header.vue";
import PopupSearch from "@/components/Header/PopupSearch.vue";
import MenuMobile from "@/components/Mobile/MenuMobile.vue";

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
  <Header @open-search="updateSearch" />
  <PopupSearch  @open-search="updateSearch" :searchIsOpen="searchIsOpen" />
  <HomeSearch />
  <main>
    <section
      class="mx-2 mx-auto grid grid-cols-1 xl:mx-40 xl:grid-cols-[60%,40%] xl:gap-4"
    >
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
  <MenuMobile />
</template>
