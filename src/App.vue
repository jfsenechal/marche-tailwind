<script setup>
import Article from "@/components/Article/Article.vue";
import Header from "@/components/Header/Inside/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
<template>
  <Header />
  <main>
    <section class="container mx-auto h-screen place-content-center px-4">
      <Article />
    </section>
  </main>
  <Footer />
</template>
