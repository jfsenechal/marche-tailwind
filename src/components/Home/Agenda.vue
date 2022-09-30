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
  <div class="shadow-2xl p-4">
    <h2 class="text-2xl text-cta-dark font-montserrat-bold p-4">Agenda</h2>
    <ul>
      <li v-for="item in events" :id="item.id">
        <a href="#"
           class="grid grid-cols-2 my-2 border border-borderjf rounded-lg hover:border-cta-light transition-all duration-500">
          <div
              class="flex flex-col justify-center items-center border-x hover:bg-cta-light hover:text-white transition-all duration-500">
            <span class="text-xl font-extrabold">{{ item.day }}</span>
            <span class="font-semibold">{{ item.month }}</span>
            <span class="font-semibold">{{ item.year }}</span>
          </div>
          <div class="flex flex-col items-start justify-center px-8">
            <span>{{ item.title }}</span>
            <span class="text-gray-500">{{ item.locality }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>