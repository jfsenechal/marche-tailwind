<script setup>
const icones = [
  {title: "Piscine", icon: "i-swimmer", iconHover: "group-hover:i-swimmer-white", id: 1, url: "/"},
  {title: "Environnement Déchet", icon: "i-leaf", iconHover: "group-hover:i-leaf-white", id: 2, url: "/"},
  {
    title: "Travaux Arrêtés de Police", icon: "i-traffic-cone",
    iconHover: "group-hover:i-traffic-cone-white",
    id: 3,
    url: "/",
  },
  {title: "Enfance Jeunesse", icon: "i-beach-ball", iconHover: "group-hover:i-beach-ball-white", id: 4, url: "/"},
  {title: "Carte dynamique", icon: "i-map", iconHover: "group-hover:i-map-white", id: 5, url: "/"},
  {title: "CPAS", icon: "i-handshake", iconHover: "group-hover:i-handshake-white", id: 6, url: "/"},
  {title: "Mon adresse e-mail", icon: "i-envelope", iconHover: "group-hover:i-envelope-white", id: 7, url: "/"},
];
</script>
<template>
  <ul
      class="mt-8 mb-8 grid w-[38rem] grid-cols-[repeat(4,minmax(9rem,9rem))] items-start justify-center gap-3"
  >
    <li
        v-for="item in icones"
        :id="item.id"
        :key="item.id"
        class="group flex flex-shrink-0 flex-grow-0 basis-1/4 justify-center text-center"
    >
      <a :href="item.url" class="icon_custom">
        <i
            class="mx-auto block h-14 w-14 rounded-full bg-white bg-[length:2.25rem_2.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-cta-light"
            :class="item.icon + ' ' + item.iconHover"
        >
        </i>
        <span
            class="mx-auto inline-block pt-3 font-montserrat-semi-bold leading-4 text-white"
        >{{ item.title }}</span
        >
      </a>
    </li>
  </ul>
</template>
