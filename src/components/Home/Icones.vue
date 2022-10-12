<script setup>
const icones = [
  { title: "Piscine", icon: "i-swimmer", iconHover: "group-hover:i-swimmer-white", id: 1, url: "/" },
  { title: "Environnement Déchet", icon: "i-leaf", iconHover: "group-hover:i-leaf-white", id: 2, url: "/" },
  {
    title: "Travaux Arrêtés de Police", icon: "i-traffic-cone",
    iconHover: "group-hover:i-traffic-cone-white",
    id: 3,
    url: "/"
  },
  { title: "Enfance Jeunesse", icon: "i-beach-ball", iconHover: "group-hover:i-beach-ball-white", id: 4, url: "/" },
  { title: "Carte dynamique", icon: "i-map", iconHover: "group-hover:i-map-white", id: 5, url: "/" },
  { title: "CPAS", icon: "i-handshake", iconHover: "group-hover:i-handshake-white", id: 6, url: "/" },
  { title: "Mon adresse e-mail", icon: "i-envelope", iconHover: "group-hover:i-envelope-white", id: 7, url: "/" }
];
</script>
<template>
  <ul
    class="icones-short-cut mt-8 mb-8 grid grid-cols-[repeat(2,minmax(0,auto))] xl:grid-cols-[repeat(12,minmax(3rem,3rem))] items-start justify-center gap-2"
  >
    <li
      v-for="item in icones"
      :id="item.id"
      :key="item.id"
      class="group flex flex-shrink-0 flex-grow-0 basis-1/4 justify-center text-center "
    >
      <a :href="item.url" class="icon_custom">
        <i
          class="mesicones mx-auto block h-12 w-12 xl:h-14 xl:w-14 rounded-full bg-white bg-[length:1.25rem_1.25rem] xl:bg-[length:2.25rem_2.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-cta-light"
          :class="item.icon + ' ' + item.iconHover"
        >
        </i>
        <span
          class="text-sm xl:text-base mx-auto inline-block pt-3 font-montserrat-semi-bold xl:leading-4 text-white"
        >{{ item.title }}</span
        >
      </a>
    </li>
  </ul>
</template>
<style>

.icones-short-cut li:nth-child(-n+4) {
  @apply xl:border xl:border-red-500 xl:col-span-3 xl:justify-self-center;
}

.icones-short-cut li:nth-child(n+5) {
  @apply xl:border xl:border-green-600 xl:justify-self-center xl:self-end xl:col-span-4;
}

.icones-short-cut li:last-child {
  @apply justify-self-center col-span-2 xl:col-span-4 xl:justify-self-center;
}
</style>