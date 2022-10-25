<script setup>
import { onMounted, ref } from "vue";
//to save css
const icones = ["i-book", "i-school", "i-healthcase", "i-leaf", "i-beach-ball", "i-wifi", "i-flatware", "i-board", "i-bus", "i-chrono"];

const items = ref([]);

function getItems() {
  fetch("https://www.marche.be/api/carto.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      items.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getItems();
});
</script>
<template>
  <div class="mx-4">
    <details v-for="(item, index) in items" :key="index"
             class="border border-cta-dark open:bg-cta-dark open:text-white px-4">
      <summary class="list-none	flex items-center cursor-pointer">
        <i
          class="mesicones block h-12 w-12 bg-[length:1.25rem_1.25rem] bg-center bg-no-repeat xl:h-14 xl:w-14 xl:bg-[length:2.25rem_2.25rem]"
          :class="item.icone"
        >
        </i>
        <span>{{ item.name }}</span>
      </summary>
      <ul class="bg-greylight">
        <li v-for="(child, index2) in item.elements" :key="child.id"
            class="p-4">
          {{ child.name }}
        </li>
      </ul>
    </details>
  </div>
</template>