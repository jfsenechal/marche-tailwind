<script setup>
const props = defineProps(["blogid"]);
const emit = defineEmits(["close-menu"]);

function backMenu() {
  console.log(props.blogid);
  if (props.blogid > 0) {
    console.log("close");
    emit("close-menu", props.blogid, "close");
  }
}

function openSousMenu(blogid, action) {
  console.log(blogid);
  console.log(action);
  var sousmenu = document.querySelector("#second-id-" + blogid);
  if (action === "close") {
    sousmenu.style.left = "100%";
    sousmenu.style.zIndex = "-1";
  }
  if (action === "open") {
    sousmenu.style.left = "0";
    sousmenu.style.zIndex = "20";
  }
}

</script>
<template>
  <h3 class="text-lg pl-6 pt-6 text-administration font-montserrat-semi-bold">
    <slot></slot>
  </h3>
  <a href="/"
     class="flex w-full flex-row items-center pl-6 py-4"
     @click="backMenu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor"
         class="w-6 h-6 text-cta-light">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    <span class="text-cta-dark">Retour sur Vivre à Marche</span>
  </a>
</template>