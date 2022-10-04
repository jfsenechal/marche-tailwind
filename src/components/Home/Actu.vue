<script setup>
const actus = [
  {
    title: "Course cycliste Famenne Ardenne Classic",
    category: "Sport",
    url: "/",
    img: "https://www.marche.be/wp-content/uploads/2022/09/cropped-Couverture-web-2022-4-1.jpg",
    id: 1,
  },
  {
    title: "Conseil communal le lundi 3 octobre (19h)",
    category: "Administration",
    url: "/",
    img: "https://www.marche.be/wp-content/uploads/2022/06/290691837_570566464561460_7215536464221442591_n.jpg",
    id: 2,
  },
  {
    title: "Nuit de l'obscurité (7 et 8 oct)",
    category: "Citoyen",
    url: "/",
    img: "https://www.marche.be/wp-content/uploads/2022/09/Nuit-obscurite-2-event-FB.jpg",
    id: 3,
  },
  {
    title: "Semaine du commerce équitable",
    category: "Santé",
    url: "/",
    img: "https://www.marche.be/sante/files/2022/09/Banner-semaine-du-CE-2022.jpg",
    id: 4,
  },
  {
    title: "Grande Donnerie au complexe St-François",
    category: "Social",
    url: "/",
    img: "https://www.marche.be/wp-content/uploads/2022/09/Donnerie-oct-r.jpg",
    id: 5,
  },
  {
    title: "Vente de bois de chauffage",
    category: "Citoyen",
    url: "/",
    img: "https://www.marche.be/wp-content/uploads/2022/09/PUBLICATION-VALVES_01-scaled.jpg",
    id: 6,
  },
];
</script>
<template>
  <div class="p-4">
    <h2 class="p-4 font-montserrat-bold text-2xl text-cta-dark">Actualités</h2>
    <ul class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2">
      <li
        v-for="item in actus"
        :id="item.id"
        class="overflow-hidden rounded-lg shadow-lg"
      >
        <a href="{{item.url}}" class="group overflow-hidden">
          <div class="bg-linear">
            <img
              :src="item.img"
              alt=""
              class="h-40 w-full rounded-t-lg object-cover opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
            />
          </div>
          <div class="p-3">
            <span class="my-1 block font-montserrat-bold text-citoyen">{{
              item.category
            }}</span>
            <h3
              class="font-montserrat-bold text-base text-cta-dark group-hover:text-blue-light"
            >
              {{ item.title }}
            </h3>
          </div>
        </a>
      </li>
    </ul>
    <a
      href="/"
      class="mt-4 ml-auto mr-2 block w-48 font-montserrat-bold text-blue-light transition-all duration-700 hover:mr-8"
    >
      Plus d'actualités
      <i
        class="fas fa-angle-right d-none d-ls-md-inline pl-12px fs-basic d-md-inline"
      ></i>
    </a>
  </div>
</template>
