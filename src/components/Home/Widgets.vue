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
  <ul class="pt-10 grid grid-cols-[repeat(5,1fr)] gap-2 place-items-center ">
    <li v-for="item in widgets" :id="item.id" class="zizi b5g-opacity-60 flex items-center h-32">
      <a :href="item.url" class="text-white b45g-img-widgets-1 bg-c54over filter-grey ">
        <h3 class="2xl">
          {{ item.title }}
        </h3>
      </a>
    </li>
  </ul>
</template>
