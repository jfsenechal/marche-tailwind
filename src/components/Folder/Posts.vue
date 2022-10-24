<script setup>
import { onMounted, ref } from "vue";

const articles = ref([]);

function getArticles() {
  fetch("https://www.marche.be/api/posts.php?id=38")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      articles.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getArticles();
});
</script>
<template>
  <ul class="pt-6 grid grid-cols-1 gap-1 xl:gap-2 xl:grid-cols-2 my-2">
    <li
      v-for="item in articles"
      :key="item.ID"
      class="rounded-lg p-2 xl:p-4">
      <a
        :href="item.url"
        class="flex flex-col justify-between items-start border border-greylight shadow-md p-4 block min-h-[6rem]">
              <h3 class="font-montserrat-semi-bold text-sm xl:text-lg text-cta-dark hover:text-cta-light">
                {{ item.post_title }}
              </h3>
        <span class="mt-2 font-montserrat-light text-sm text-cta-primary" v-html="item.excerpt"></span>
      </a>
    </li>
  </ul>
</template>