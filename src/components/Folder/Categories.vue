<script setup>
import { onMounted, ref } from "vue";

const categories = ref([]);

function getCats() {
  fetch("https://www.marche.be/api/categories.php?id=38")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      categories.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getCats();
});
</script>
<template>

  <select name="category"
          class="xl:hidden flex border border-cta-primary p-2 mt-3 font-montserrat-semi-bold bg-white mx-auto">
    <option v-for="item in categories" :key="item.cat_ID" :value="item.cat_ID">
      {{ item.name }}
    </option>
  </select>

  <ul class="hidden xl:flex pt-6 flex-1 flex-wrap gap-2 w-1/2 my-2">
    <li
      v-for="item in categories"
      :key="item.cat_ID"
      class="border border-cta-dark p-3 font-montserrat-light  hover:bg-cta-dark hover:text-white">
      <a
        :href="item.url"
        class="">
        {{ item.name }}
      </a>
    </li>
  </ul>
</template>