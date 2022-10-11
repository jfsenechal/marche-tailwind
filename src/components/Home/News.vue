<script setup>
import { onMounted, ref } from "vue";

const actus = ref([]);

function getNews() {

  fetch("https://www.marche.be/api/actus.php").then(function(response) {
    // The API call was successful!
    return response.json();
  }).then(function(data) {
    // This is the JSON from our response
    actus.value = data;
  }).catch(function(err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
}

Object.defineProperty(String.prototype, "capitalize", {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});
onMounted(() => {
  getNews();
});
</script>
<template>
  <h2 class="text-center lg:text-left p-4 font-montserrat-bold text-2xl text-cta-dark">Actualités</h2>
  <ul class="grid grid-cols-1 xl:grid-cols-[repeat(3,minmax(0,1fr))] gap-2">
    <li
      v-for="item in actus.slice(0,6)"
      :id="item.ID"
      :key="item.ID"
      class="overflow-hidden rounded-lg shadow-lg"
    >
      <a href="{{item.url}}" class="group overflow-hidden grid grid-cols-2 xl:block ">
        <div class="bg-linear">
          <img
            :src="item.post_thumbnail_url"
            alt=""
            class="h-32 lg:h-40 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
          />
        </div>
        <div class="flex flex-col justify-center items-start ml-2 xl:p-4">
            <span :class="'my-1 block font-montserrat-medium text-xs ' + item.colorTailwind">
              {{ item.blog.capitalize() }}
            </span>
          <h3
            class="font-montserrat-semi-bold text-sm text-cta-dark group-hover:text-cta-light"
          >
            {{ item.post_title }}
          </h3>
        </div>
      </a>
    </li>
  </ul>
  <a
    class="pt-4 ml-auto mr-2 block w-56 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8
       block items-center justify-center"
    href="/"
    title="Plus d'actualités"
  > Plus d'actualités
    <i class="ml-4 h-16 w-16 fa fa-chevron-right" aria-hidden="true"></i>
  </a>
</template>
<style>
.bg-linear {
  background-color: rgba(74, 224, 199, 0.55);
}
</style>