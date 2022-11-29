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
  <div class="lg:hidden mx-2 flex flex-col">
    <select name="filtres"
            class="flex border border-cta-dark p-2 mt-3 font-montserrat-semi-bold bg-white mx-auto mb-4">
      <optgroup v-for="(item, index) in items" :key="index" :label="item.name">
        {{ item.name }}
        <option v-for="child in item.elements" :key="child.id">
          {{ child.name }}
        </option>
      </optgroup>
    </select>
  </div>

  <div class="hidden lg:block ml-4 flex flex-col">
    <details v-for="(item, index) in items" :key="index"
             class="border border-cta-dark/2 group open:bg-cta-dark open:text-white ">
      <summary class="list-none	flex items-center cursor-pointer whitespace-nowrap ">
        <i
          class="h-12 w-12 bg-[length:1.0rem_1.0rem] bg-center bg-no-repeat xl:h-14 xl:w-14 xl:bg-[length:1.75rem_1.75rem]"
          :class="item.icone"
        >
        </i>
        <span class="px-6">{{ item.name }}</span>
      </summary>
      <ul class="bg-grey-light text-cta-dark w-full block">
        <li v-for="child in item.elements" :key="child.id"
            class="py-2 hover:text-cta-light flex flex-col items-stretch">
          <button @click.prevent="" class="flex-grow block h-full w-full">{{ child.name }}</button>
        </li>
      </ul>
    </details>
  </div>
</template>