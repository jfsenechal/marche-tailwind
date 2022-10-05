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
  <div class="w-full h-52 flex flex-col md:flex-row">
    <div class="split basis-1/2 bg-slate-500">
      <ul class="flex flex-col items-start pr-8 ">
        <li v-for="item in items" :key="item.id"
            class="relative flex flex-row basis-2/5 items-end w-full leading-relaxed font-montserrat-semi-bold text-white hover:bg-white"
            :class="item.color">
          <a href="/" class="flex basis-2/5 p-2 whitespace-nowrap text-left">{{ item.title }}</a>
          <div
              class="flex justify-start flex-wrap absolute grow-0 shrink-0  basis-3/5 bg-red-400  top-0 bottom-0 right-0 left-auto ">
            iiii
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<template>
  <div class="fixed inset-0">
    <ul class="flex flex-col items-start">
      <li class="initjf flex w-full max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col items-end bg-red-400">
        <a href="#" class="">Administration</a>
        <div class="absolute top-0 bottom-0 left-auto right-0 flex w-full max-w-[55%]">
          <ul class="flex flex-col items-start">
            <li class="flex h-10">
              <a href="#" class="pl-20 w-full">Menu</a>
            </li>
            <li class="flex h-10">
              <a href="#" class="pl-20 w-full">Menu2</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<template>
  <div class="grid grid-cols-2">
    <div class="bg-red-500">
      <ul class="flex flex-col">
        <li class="grid">
          <a href="#">Administration</a>
        </li>
        <li>
          <a href="#">Econome</a>
        </li>
      </ul>
    </div>
    <div class="grid bg-yellow-500">
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2">
        <li>Sous menu1</li>
      </ul>
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2">
        <li>Sous menu2</li>
      </ul>
      <ul class="col-start-1 col-end-2 row-start-1 row-end-2">
        <li>Sous menu3</li>
      </ul>
    </div>
  </div>
</template>