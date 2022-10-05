<script setup>
import Alpine from "alpinejs";
Alpine.start();
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
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Culture", "color": "hover:text-culture", "id": 3, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Économie", "color": "hover:text-economie", "id": 4, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Enfance-Jeunesse", "color": "hover:text-jeunesse", "id": 5, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Santé", "color": "hover:text-sante", "id": 6, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Social", "color": "hover:text-social", "id": 7, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Sport", "color": "hover:text-sport", "id": 8, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  },
  {
    "title": "Tourisme", "color": "hover:text-tourisme", "id": 9, "childs":
      [
        { "title": "Conseil" },
        { "title": "Collège" }
      ]
  }
];
</script>

<template>
  <div x-data="{ active: 0,
  isActive(e) { console.log(e.target) },
  setActive(e) {
  console.log(e)
      //  this.active = value;
    }}">
    <div class="grid grid-cols-2 bg-slate-500">

      <div class="bg-red-500">
        <ul class="flex flex-col items-start pr-14">
          <li v-for="item in items"
              :key="item.id"
              class="flex flex-col items-end w-full leading-relaxed font-montserrat-semi-bold text-white hover:bg-white"
              :class="item.color"
          >
            <a href="#" xclick="open=true" x-on:click="setActive(this)"
               class="text-left pl-[760px] pr-[36px] whitespace-nowrap">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="grid bg-yellow-500">
        <ul v-for="item in items"
            :key="item.id"
            :data-menuid="item.id"
            class="col-start-1 col-end-2 row-start-1 row-end-2"
            :id="'menu'+item.id" x-show="this.active === 1"
            x-on:click.outside="active = 0">
          <li v-for="child in item.childs">
            {{ child.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>