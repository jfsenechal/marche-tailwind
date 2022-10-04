<script setup>
const actus = [
  {
    'title': 'Course cycliste Famenne Ardenne Classic',
    'category': 'Sport',
    'url': '/',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/cropped-Couverture-web-2022-4-1.jpg',
    'id': 1
  },
  {
    'title': 'Conseil communal le lundi 3 octobre (19h)',
    'category': 'Administration',
    'url': '/',
    'img': 'https://www.marche.be/wp-content/uploads/2022/06/290691837_570566464561460_7215536464221442591_n.jpg',
    'id': 2
  },
  {
    'title': 'Nuit de l\'obscurité (7 et 8 oct)',
    'category': 'Citoyen',
    'url': '/',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/Nuit-obscurite-2-event-FB.jpg',
    'id': 3
  },
  {
    'title': 'Semaine du commerce équitable',
    'category': 'Santé',
    'url': '/',
    'img': 'https://www.marche.be/sante/files/2022/09/Banner-semaine-du-CE-2022.jpg',
    'id': 4
  },
  {
    'title': 'Grande Donnerie au complexe St-François',
    'category': 'Social',
    'url': '/',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/Donnerie-oct-r.jpg',
    'id': 5
  },
  {
    'title': 'Vente de bois de chauffage',
    'category': 'Citoyen',
    'url': '/',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/PUBLICATION-VALVES_01-scaled.jpg',
    'id': 6
  }
]
</script>
<template>
  <div class="p-4">
    <h2 class="text-2xl text-cta-dark font-montserrat-bold p-4">Actualités</h2>
    <ul class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2  ">
      <li v-for="item in actus" :id="item.id" class="rounded-lg shadow-lg overflow-hidden">
        <a href="{{item.url}}" class="group overflow-hidden ">
          <div class="bg-linear">
          <img :src="item.img" alt="" class="w-full h-40 object-cover rounded-t-lg opacity-100 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"/>
          </div>
          <div class="p-3">
            <span class="block text-citoyen font-montserrat-bold my-1">{{ item.category }}</span>
            <h3 class="font-montserrat-bold text-base text-cta-dark group-hover:text-blue-light">{{ item.title }}</h3>
          </div>
        </a>
      </li>
    </ul>
    <a href="/" class="block mt-4 text-blue-light font-montserrat-bold ml-auto mr-2 w-48 hover:mr-8 transition-all duration-700">
      Plus d'actualités
      <i class="fas fa-angle-right d-none d-ls-md-inline pl-12px fs-basic d-md-inline"></i>
    </a>
  </div>
</template>