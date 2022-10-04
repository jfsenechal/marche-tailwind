<script setup>
const widgets = [
  {
    'title': 'Avis de publication',
    'intro': 'Enquêtes publiques, <br>assemblées institutions...',
    'img': '',
    'url': '/',
    'id': 1
  },
  {
    'title': 'Economie', 'intro': 'Infos pratiques, <br>commerces locaux...',
    'img': '',
    'url': '/', 'id': 2
  },
  {
    'title': 'Participation citoyenne',
    'intro': 'Plateforme de l\'enveloppe participative,<br> consultations publiques…',
    'img': '',
    'url': '/',
    'id': 3
  },
  {
    'title': 'Plateforme de volontariat',
    'intro': 'Offres et demandes du tissu associatif',
    'img': '',
    'url': '/', 'id': 4
  },
  {
    'title': 'Avis de décès',
    'intro': 'Annonces nécrologiques de notre commune', 'img': '',
    'url': '/', 'id': 5
  },
]
</script>
<template>
  <div class="pt-10 grid grid-cols-[repeat(5,1fr)] gap-2">
    <div v-for="item in widgets" :id="item.id" class="relative flex w-96 items-center justify-center overflow-hidden">
      <i class="bg-widget-image absolute inset-0 block h-32 w-96 border-2 border-red-400 bg-center bg-no-repeat grayscale"></i>
      <a :href="item.url"
         class="bg-widget-color hover:bg-widget-color-ho group relative flex h-32 w-96 flex-col items-center justify-center text-white transition-all duration-700">
        <h3 class="2xl relative top-6 transition-all duration-700 group-hover:top-0 group-hover:ease-in-out">
          {{ item.title }}
        </h3>
        <span class="relative -bottom-20 pt-4 text-white transition-all delay-300 duration-700 group-hover:bottom-0">
          Infos pratiques, <br/>commerces locaux...
        </span>
      </a>
    </div>
  </div>
</template>
