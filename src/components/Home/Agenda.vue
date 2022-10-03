<script setup>
const events = [
  {
    'title': 'Concert d\'automne par l\'Harmonie Communale',
    'year': 2022,
    'month': 10,
    'day': '01',
    'locality': 'Marche-en-Famenne',
    'id': 1
  },
  {
    'title': 'Exposition (peintures): Nadine Debailleul', 'year': 2022, 'month': 10, 'day': 10,
    'locality': 'Aye', 'id': 2
  },
  {
    'title': 'Visite du jardin la clé du temps', 'year': 2022, 'month': 10, 'day': 13,
    'locality': 'Champlon', 'id': 3
  },
  {
    'title': 'Course cycliste: DH Famenne Ardenne Classic', 'year': 2022, 'month': 10, 'day': 20,
    'locality': 'Marche-en-Famenne', 'id': 4
  },
  {
    'title': 'Brocante Annuelle', 'year': 2022, 'month': 10, 'day': 23,
    'locality': 'Marloie', 'id': 5
  },
]

</script>
<template>
  <div class="shadow-xl p-4">
    <h2 class="text-2xl text-cta-dark font-montserrat-bold p-4">Agenda</h2>
    <ul>
      <li v-for="item in events" :id="item.id" class="">
        <a href="#"
           class="grid grid-cols-[10rem,1fr] my-2 text-cta-dark group border border-borderjf/50 hover:border-blue-light rounded-lg transition-all duration-700">
          <div
              class="flex flex-col justify-center items-center border-x group-hover:bg-cta-light group-hover:text-white transition-all duration-700">
            <span class="text-xl font-montserrat-extra-bold">{{ item.day }}</span>
            <span class="font-montserrat-bold">{{ item.month }}</span>
            <span class="font-montserrat-bold">{{ item.year }}</span>
          </div>
          <div class="flex flex-col items-start justify-center px-8">
            <span>{{ item.title }}</span>
            <span class="text-gray-500 text-sm">{{ item.locality }}</span>
          </div>
        </a>
      </li>
    </ul>
    <a href="/" class="block mt-4 text-blue-light font-montserrat-bold ml-auto mr-2 w-48">
      Tout l'agenda
      <i class="fas fa-angle-right d-none d-ls-md-inline pl-12px fs-basic d-md-inline"></i>
    </a>
  </div>
</template>