<script setup>
function toggleSearch(action) {
  const menu = document.querySelector("#searchmobile");
  if (action === "close") {
    console.log('close')
    menu.style.display = "hidden"
    menu.style.left = "100%";
  }
  if (action === "open") {
    console.log('open')
    menu.style.left = 0;
  }
}
//pour adapter pour alpinejs
const leftproperty = 'left-full'
</script>

<template>
  <li class="xl:hidden">
    <a href="#" @click.prevent="toggleSearch('open')" class="icon-menu-mobile">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
      <span class="text-menu-mobile">Rechercher</span>
    </a>
    <div
        class="xl:hidden absolute bg-white right-0 bottom-[4.5rem] w-full h-[74vh] p-8 transition-all duration-500 overflow-hidden"
        :class="leftproperty"
        id="searchmobile">
      <div class="flex flex-col items-center justify-center px-2">
        <button class="w-32 " @click.prevent="toggleSearch('close')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 inline-block text-cta-dark">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="font-montserrat-semi-bold text-cta-dark">Fermer</span>
        </button>
        <hr class="border-b border-cta-dark/50 m-3 w-full"/>
        <form class="flex">
          <div class="relative">
            <input
              class="h-10 rounded-lg border border-cta-dark pr-10 text-sm placeholder-gray-300 focus:z-10"
              placeholder="Rechercher..."
              type="text"
            />

            <button
              type="submit"
              class="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
            >
              <span class="sr-only">Submit Search</span>
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </li>
</template>