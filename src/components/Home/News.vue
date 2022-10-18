<script setup>
import { onMounted, ref } from "vue";

const actus = ref([]);

function getNews() {
  fetch("https://www.marche.be/api/actus.php")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      actus.value = data;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
onMounted(() => {
  getNews();
});
</script>
<template>
  <h2
    class="py-2 px-4 text-center font-montserrat-bold text-2xl text-cta-dark lg:text-left xl:p-4"
  >
    Actualités
  </h2>
  <ul class="pt-2 xl:pt-0 grid grid-cols-1 gap-2 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
    <li
      v-for="item in actus.slice(0, 6)"
      :id="item.ID"
      :key="item.ID"
      class="overflow-hidden rounded-lg shadow-lg"
    >
      <a
        href="{{item.url}}"
        class="group grid grid-cols-2 overflow-hidden xl:block"
      >

          <img
            :src="item.post_thumbnail_url"
            alt=""
            class="justify-self-center self-center h-32 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-40"
          />

        <div class="ml-2 flex flex-col items-start justify-center xl:p-4">
          <span
            :class="
              'my-1 block font-montserrat-medium text-xs xl:text-base ' +
              item.colorTailwind
            "
          >
            {{ item.blog }}
          </span>
          <h3
            class="xl:text-md xl:font-montserrat-semi-bold text-sm text-cta-dark group-hover:text-cta-light"
          >
            {{ item.post_title }}
          </h3>
        </div>
      </a>
    </li>
  </ul>
  <a
    class="ml-auto mr-2 block block w-56 items-center justify-center pt-4 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
    href="/"
    title="Plus d'actualités"
  >
    Plus d'actualités
    <i class="fa fa-chevron-right ml-4 h-16 w-16" aria-hidden="true"></i>
  </a>
</template>
<style>
.bg-linear {
  background-color: rgba(74, 224, 199, 0.55);
}
</style>
