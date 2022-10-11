<script setup>
import { onMounted, ref } from "vue";

const events = ref([]);

function getEvents() {

  fetch("https://www.marche.be/api/events.php").then(function(response) {
    // The API call was successful!
    return response.json();
  }).then(function(data) {
    // This is the JSON from our response
    events.value = data;
  }).catch(function(err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
}

onMounted(() => {
  getEvents();
});

function formatDate(dateObject) {
  console.log("date: " + dateObject.date);
  let date = new Date(dateObject.date);
  console.log("object" + date);
  return "01";
}

function formatLocality() {

  return "Marche-en-Famenne";
}
</script>
<template>
  <h2 class="p-4 font-montserrat-bold text-2xl text-cta-dark">Agenda</h2>
  <ul>
    <li v-for="item in events.slice(0,5)" class="">
      <a
        href="#"
        class="group my-2 grid grid-cols-[6rem,1fr] xl:grid-cols-[10rem,1fr] rounded-lg border border-greylight/50 text-cta-dark transition-all duration-700 hover:border-cta-light"
      >
        <div
          class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
        >
              <span class="font-montserrat-semi-bold text-xl">
                {{ item.dateEvent["day"] }}
              </span>
          <span class="">{{ item.dateEvent["month"] }}</span>
          <span class="">{{ item.dateEvent["year"] }}</span>
        </div>
        <div class="flex flex-col items-start justify-center px-8">
          <span>{{ item.nom }}</span>
          <span class="text-sm text-gray-500">{{ item.locality }}</span>
        </div>
      </a>
    </li>
  </ul>
  <a
    class="mt-4 ml-auto mr-2 block w-56 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8
       block items-center justify-center"
    href="/"
    title="Tout l'agenda"
  > Tout l'agenda
    <i class="ml-4 h-16 w-16 fa fa-chevron-right" aria-hidden="true"></i>
  </a>
</template>
