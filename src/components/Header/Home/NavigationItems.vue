<script setup>
const items = [
  {'title': 'Administration', 'color': 'hover:text-administration', 'id': 1},
  {'title': 'Citoyen', 'color': 'hover:text-citoyen', 'id': 2},
  {'title': 'Culture', 'color': 'hover:text-culture', 'id': 3},
  {'title': 'Économie', 'color': 'hover:text-economie', 'id': 4},
  {'title': 'Enfance-Jeunesse', 'color': 'hover:text-jeunesse', 'id': 5},
  {'title': 'Santé', 'color': 'hover:text-sante', 'id': 6},
  {'title': 'Social', 'color': 'hover:text-social', 'id': 7},
  {'title': 'Sport', 'color': 'hover:text-sport', 'id': 8},
  {'title': 'Tourisme', 'color': 'hover:text-tourisme', 'id': 9},
]
</script>
<template>
  <div class="grid grid-cols-2 bg-slate-500">
    <div class="bg-red-500">
      <ul class="flex flex-col items-start pr-14">
        <li  v-for="item in items" :key="item.id"
             class="flex flex-col items-end w-full leading-relaxed font-montserrat-semi-bold text-white hover:bg-white"
             :class="item.color"
        >
          <a href="#" class="text-left pl-[760px] pr-[36px] whitespace-nowrap">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="grid bg-yellow-500">
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2" id="menu1">
        <li>Sous menu1</li>
      </ul>
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2" id="menu2">
        <li>Sous menu2</li>
      </ul>
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2" id="menu3">
        <li>Sous menu3</li>
      </ul>
    </div>
  </div>
</template>