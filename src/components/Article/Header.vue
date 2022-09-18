<script setup>
import Share from "@/components/Article/Share.vue";
import Image from "@/components/Article/Image.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
</script>
<template>
  <div class="flex items-start w-full mt-12">
      <Image/>
      <div class="w-1/3 flex flex-col justify-between h-80">
        <Share/>
        <SeeAlso/>
      </div>
    </div>
</template>
