<script setup>
const events = [
  {
    title: "Concert d'automne par l'Harmonie Communale",
    year: 2022,
    month: 10,
    day: "01",
    locality: "Marche-en-Famenne",
    id: 1,
  },
  {
    title: "Exposition (peintures): Nadine Debailleul",
    year: 2022,
    month: 10,
    day: 10,
    locality: "Aye",
    id: 2,
  },
  {
    title: "Visite du jardin la clé du temps",
    year: 2022,
    month: 10,
    day: 13,
    locality: "Champlon",
    id: 3,
  },
  {
    title: "Course cycliste: DH Famenne Ardenne Classic",
    year: 2022,
    month: 10,
    day: 20,
    locality: "Marche-en-Famenne",
    id: 4,
  },
  {
    title: "Brocante Annuelle",
    year: 2022,
    month: 10,
    day: 23,
    locality: "Marloie",
    id: 5,
  },
  {
    title: "Kermesse hivernale",
    year: 2022,
    month: 10,
    day: 28,
    locality: "Grimbièmont",
    id: 6,
  },
];
</script>
<template>
      <h2 class="p-4 font-montserrat-bold text-2xl text-cta-dark">Agenda</h2>
      <ul>
        <li v-for="item in events" :id="item.id" class="">
          <a
            href="#"
            class="group my-2 grid grid-cols-[10rem,1fr] rounded-lg border border-borderjf/50 text-cta-dark transition-all duration-700 hover:border-blue-light"
          >
            <div
              class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
            >
              <span class="font-montserrat-semi-bold text-xl">{{
                item.day
              }}</span>
              <span class="">{{ item.month }}</span>
              <span class="">{{ item.year }}</span>
            </div>
            <div class="flex flex-col items-start justify-center px-8">
              <span>{{ item.title }}</span>
              <span class="text-sm text-gray-500">{{ item.locality }}</span>
            </div>
          </a>
        </li>
      </ul>
    <a
      href="/"
      class="mt-4 ml-auto mr-2 block w-48 font-montserrat-semi-bold text-blue-light transition-all duration-700 hover:mr-8"
    >
      Tout l'agenda
      <i
        class="fas fa-angle-right d-none d-ls-md-inline pl-12px fs-basic d-md-inline"
      ></i>
    </a>
</template>
