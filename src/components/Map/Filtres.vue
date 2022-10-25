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
  <div class="ml-4 flex flex-col">
    <details v-for="(item, index) in items" :key="index"
             class="border border-cta-dark/2 open:bg-cta-dark open:text-white ">
      <summary class="list-none	flex items-center cursor-pointer whitespace-nowrap ">
        <i
          class="h-12 w-12 bg-[length:1.0rem_1.0rem] bg-center bg-no-repeat xl:h-14 xl:w-14 xl:bg-[length:1.75rem_1.75rem]"
          :class="item.icone"
        >
        </i>
        <span class="px-6">{{ item.name }}</span>
      </summary>
      <ul class="bg-greylight text-cta-dark w-full block">
        <li v-for="child in item.elements" :key="child.id"
            class="p-4 hover:text-cta-light ">
          <a href="#" @click.prevent="">{{ child.name }}</a>
        </li>
      </ul>
    </details>
  </div>
</template>