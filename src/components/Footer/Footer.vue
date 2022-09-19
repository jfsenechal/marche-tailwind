<script setup>
import ShortCut from "@/components/Footer/ShortCut.vue";
</script>
<template>
  <footer class="font-montserrat-light p-5 bg-cta-body text-white grid grid-cols-4 justify-between">
    <div>
      <img src="public/images/img_logo_white.png" class="w-20" alt="logo">
    </div>
    <div>
      <h4 class="font-montserrat-bold">Découvrez</h4>
      <ul class="text-sm p-2 leading-6">
        <li class="px-2"><a href="">E-Guichet</a></li>
        <li class="px-2"><a href="">Horaires-Contact</a></li>
        <li class="px-2"><a href="">Actualités</a></li>
        <li class="px-2"><a href="">Agenda</a></li>
      </ul>
    </div>
    <ShortCut/>
    <div>
      <h4 class="font-montserrat-bold">Contact</h4>
      <div class="text-sm leading-6	">
        Contactez l' Hôtel de ville<br>
        Du lundi au jeudi : de 8h à 12h et de 13h à 17h<br>
        Vendredi : de 8h à 12h et de 13h à 15h<br>
      </div>
    </div>
  </footer>
</template>