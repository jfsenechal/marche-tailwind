<script setup>
const items = [
  {'title': 'Administration', 'id': 1},
  {'title': 'Citoyen', 'id': 2},
  {'title': 'Culture', 'id': 3},
  {'title': 'Économie', 'id': 4},
  {'title': 'Enfance-Jeunesse', 'id': 5},
  {'title': 'Santé', 'id': 6},
  {'title': 'Social', 'id': 7},
  {'title': 'Sport', 'id': 8},
  {'title': 'Tourisme', 'id': 9},
]
</script>
<template>
  <div class="relative w-full h-52 flex flex-col md:flex-row">
    <div class="split basis-1/2 bg-slate-500">
      <ul class="flex flex-col items-end pr-8 ">
        <li v-for="item in items" :key="item.id"
            class="flex-grow text-white hover:bg-white hover:text-cta-dark flex flex-col items-end w-full">
          <a href="/">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="split basis-1/2 bg-green-600">!!</div>
  </div>

  <ul class="flex flex-col">
    <li v-for="item in items" :key="item.id"
        class="text-white hover:bg-white hover:text-cta-dark flex flex-col 45items-end">
      <div class="bg-green-600 basis-2/5 ">
        <a href="/">{{ item.title }}</a>
      </div>
      <div class="bg-yellow-500 basis-2/5 ">
        <p class="text-white">coucou</p>
      </div>
    </li>
  </ul>
</template>