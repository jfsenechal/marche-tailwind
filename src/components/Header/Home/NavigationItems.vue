<script setup>
import { ref } from "vue";

const items = [
  {
    "title": "Administration", "color": "hover:text-administration", "id": 1, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Citoyen", "color": "hover:text-citoyen", "id": 2, "childs":
      [
        { "title": "Environnement" },
        { "title": "Justice" }
      ]
  },
  {
    "title": "Culture", "color": "hover:text-culture", "id": 3, "childs":
      [
        { "title": "Musées" },
        { "title": "Cinéma" }
      ]
  },
  {
    "title": "Économie", "color": "hover:text-economie", "id": 4, "childs":
      [
        { "title": "Commerces" },
        { "title": "Parking" }
      ]
  },
  {
    "title": "Enfance-Jeunesse", "color": "hover:text-jeunesse", "id": 5, "childs":
      [
        { "title": "Crèches" },
        { "title": "Activités" }
      ]
  },
  {
    "title": "Santé", "color": "hover:text-sante", "id": 6, "childs":
      [
        { "title": "Médecins" },
        { "title": "Vétos" }
      ]
  },
  {
    "title": "Social", "color": "hover:text-social", "id": 7, "childs":
      [
        { "title": "Cpas" },
        { "title": "Associations" }
      ]
  },
  {
    "title": "Sport", "color": "hover:text-sport", "id": 8, "childs":
      [
        { "title": "Clubs" },
        { "title": "Piste" }
      ]
  },
  {
    "title": "Tourisme", "color": "hover:text-tourisme", "id": 9, "childs":
      [
        { "title": "Restos" },
        { "title": "Promenade" }
      ]
  }
];

const state = ref(0);

function isActive(id) {
  return state === id;
}

function setActive(id) {
  console.log(id)
  state.value = id
  console.log(state.value)
}

</script>

<template>
  <div class="grid grid-cols-2 bg-slate-500">

    <div class="bg-red-500">
      <ul class="flex flex-col items-start pr-14">
        <li v-for="item in items"
            :key="item.id"
            class="flex flex-col items-end w-full leading-relaxed font-montserrat-semi-bold text-white hover:bg-white"
            :class="item.color"
        >
          <a href="#"
             class="text-left pl-[760px] pr-[36px] whitespace-nowrap"
             @click="setActive(item.id)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="grid bg-yellow-500">
      <ul v-for="item in items"
          :key="item.id"
          :data-menu-id="item.id"
          class="col-start-1 col-end-2 row-start-1 row-end-2"
          :id="'menu'+item.id"
          v-show="state === item.id"
      >
        <li v-for="child in item.childs">
          {{ child.title }}
        </li>
      </ul>
    </div>
  </div>
</template>