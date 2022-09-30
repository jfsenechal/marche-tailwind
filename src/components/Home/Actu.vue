<script setup>
const actus = [
  {
    'title': 'Course cycliste Famenne Ardenne Classic',
    'category': 'Sport',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/cropped-Couverture-web-2022-4-1.jpg',
    'id': 1
  },
  {
    'title': 'Conseil communal le lundi 3 octobre (19h)',
    'category': 'Administration',
    'img': 'https://www.marche.be/wp-content/uploads/2022/06/290691837_570566464561460_7215536464221442591_n.jpg',
    'id': 2
  },
  {
    'title': 'Nuit de l\'obscurité (7 et 8 oct)',
    'category': 'Citoyen',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/Nuit-obscurite-2-event-FB.jpg',
    'id': 3
  },
  {
    'title': 'Semaine du commerce équitable',
    'category': '',
    'img': 'https://www.marche.be/sante/files/2022/09/Banner-semaine-du-CE-2022.jpg',
    'id': 4
  },
  {
    'title': 'Grande Donnerie au complexe St-François',
    'category': '',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/Donnerie-oct-r.jpg',
    'id': 5
  },
  {
    'title': 'Vente de bois de chauffage',
    'category': '',
    'img': 'https://www.marche.be/wp-content/uploads/2022/09/PUBLICATION-VALVES_01-scaled.jpg',
    'id': 6
  }
]
</script>
<template>
  <div class="p-4">
    <h2 class="text-2xl text-cta-dark font-montserrat-bold p-4">Actualités</h2>
    <div class="container grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
      <div v-for="item in actus" :id="item.id" class="rounded-lg shadow-2xl">
        <img :src="item.img" alt="" class="w-full h-48 object-cover rounded-t-lg"/>
        <div class="p-6">
          <h3 class="font-bold text-xl">{{ item.title }}</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo assumenda porro inventore repellendus
            ipsum.</p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>