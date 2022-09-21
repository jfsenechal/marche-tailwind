<template>
  <div class="flex mt-2">
    <a class="icon inline-flex justify-center items-center" href="#" title="Page Facebook">
      <i class="fa fa-facebook"></i>
    </a>
    <a class="icon inline-flex justify-center items-center" href="#" title="Page Twitter">
      <i class="fa fa-twitter"></i>
    </a>
    <a class="icon inline-flex justify-center items-center" href="#" title="Page Instagram">
      <i class="fa fa-instagram"></i>
    </a>
    <a class="icon inline-flex justify-center items-center" href="#" title="Page Youtube">
      <i class="fa fa-youtube"></i>
    </a>
  </div>
</template>
<style>
.icon {
  @apply mx-1 w-6 h-6 bg-cta-dark text-white rounded-full hover:bg-cta-light;
}
i.fa {
  @apply text-sm;
}
</style>