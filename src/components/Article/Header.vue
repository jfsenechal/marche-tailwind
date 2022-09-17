<script setup>
import Share from "@/components/Article/Share.vue";
import Image from "@/components/Article/Image.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
</script>
<template>
  <div class="flex items-start w-full mt-12">
    <Image/>
    <div class="w-1/3 mt-5">
      <Share/>
      <SeeAlso/>
    </div>
  </div>
</template>
