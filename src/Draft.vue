<script setup>
import { onMounted, ref } from "vue";

const mainItems = ref([]);

function getItems() {
  fetch("https://www.marche.be/api/menu.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      mainItems.value = data;
    })
    .catch(function(err) {
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
  getItems();
});
</script>

<template>
  <nav class="bg-cta-dark fixed inset-0 overflow-hidden w-full">
    <ul class="flex flex-col items-stretch justify-start h-auto mt-3 box-border max-w-[50%]">
      <li
        v-for="item in mainItems"
        :data-top-id="item.blogid"
        :key="item.blogid"
        class="py-1 initial flex flex-col basis-full hover:bg-white font-montserrat-semi-bold leading-8 text-white"
        :class="item.colorhover">
        <a href="/" class="mr-6 whitespace-nowrap ml-auto">{{ item.name }}</a>
        <div
          :data-menu-id="item.blogid"
          class="hidden absolute top-0 bottom-0 left-1/2 right-0 group-hover:bg-white">
          <ul class="w-full p-8 grid grid-cols-2" id="sousmenu">
            <li
              v-for="child in item.items"
              :key="child.ID"
              class="text-cta-dark"
              :class="item.colorhover">
              <a :href="child.url">{{ child.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
<style>
li.initial {
  position: initial;
}

.entry.D a:not([href*="http://css-tricks"]) {
}

#sousmenu a:not([href^='https://www.marche.be'])::after {
  background-image: url("../images/external.svg");
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 1.2rem;
  height: 1.2rem;
  background-size: 100%;
  margin-inline-start: 0.8rem;
  opacity: 0.8;
}

li[data-top-id='1']:hover > div,
li[data-top-id='2']:hover > div,
li[data-top-id='3']:hover > div,
li[data-top-id='4']:hover > div,
li[data-top-id='5']:hover > div,
li[data-top-id='6']:hover > div,
li[data-top-id='7']:hover > div,
li[data-top-id='8']:hover > div,
li[data-top-id='11']:hover > div,
li[data-top-id='12']:hover > div,
li[data-top-id='13']:hover > div,
li[data-top-id='14']:hover > div {
  opacity: 100;
  background-color: white;
  display: block;
}
</style>