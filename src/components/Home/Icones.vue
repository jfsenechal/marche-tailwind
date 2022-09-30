<script setup>
import IconeItem from "@/components/Home/IconeItem.vue";</script>
<template>
  <ul class="mt-8 w-[32rem] grid grid-cols-[repeat(4,minmax(7rem,7rem))] gap-6">
    <IconeItem title="Piscine" :icon="'i-swimmer'" :iconHover="'i-swimmer-white'"/>
    <IconeItem title="Environnement Déchet" :icon="'i-leaf'" :iconHover="'i-leaf-white'"/>
    <IconeItem title="Travaux Arrêtés de Police" :icon="'i-traffic-cone'" :iconHover="'i-traffic-cone-white'"/>
    <IconeItem title="Enfance Jeunesse" :icon="'i-beach-ball'" :iconHover="'i-beach-ball-white'"/>
    <IconeItem title="Carte dynamique" :icon="'i-map'" :iconHover="'i-map-white'"/>
    <IconeItem title="CPAS" :icon="'i-handshake'" :iconHover="'i-handshake-white'"/>
    <IconeItem title="Mon adresse e-mail" :icon="'i-envelope'" :iconHover="'i-envelope-white'"/>
  </ul>
</template>
