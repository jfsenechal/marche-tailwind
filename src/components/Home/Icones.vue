<script setup>

const icones = [
  {'title': 'Piscine', 'icon': 'i-swimmer', 'id': 1, 'url': '/'},
  {'title': 'Environnement Déchet', 'icon': 'i-leaf', 'id': 2, 'url': '/'},
  {'title': 'Travaux Arrêtés de Police', 'icon': 'i-traffic-cone', 'id': 3, 'url': '/'},
  {'title': 'Enfance Jeunesse', 'icon': 'i-beach-ball', 'id': 4, 'url': '/'},
  {'title': 'Carte dynamique', 'icon': 'i-map', 'id': 5, 'url': '/'},
  {'title': 'CPAS', 'icon': 'i-handshake', 'id': 6, 'url': '/'},
  {'title': 'Mon adresse e-mail', 'icon': 'i-envelope', 'id': 7, 'url': '/'},
]
</script>
<template>
  <ul class="mt-8 w-[32rem] grid grid-cols-[repeat(4,minmax(7rem,7rem))] gap-6 justify-center items-start">
    <li v-for="item in icones" :id="item.id"
        class="group flex flex-shrink-0 flex-grow-0 basis-1/4 justify-center text-center">
      <a href="{{item.url}}" class="icon_custom">
        <i
            class="mx-auto block h-14 w-14 rounded-full
            bg-white bg-[length:2.25rem_2.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-blue-light"
            :class="item.icon+' group-hover:'+item.icon+'-white'">
        </i>
        <span class="mx-auto inline-block pt-3 font-montserrat-bold leading-4 text-white">{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>
