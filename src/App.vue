<script setup>
import Article from "@/components/Article/Article.vue";
import Header from "@/components/Header/Inside/Header.vue";
import Footer from "@/components/Footer/Footer.vue";</script>
<template>
  <Header />
  <main>
    <section class="container mx-auto px-4 place-content-center h-screen">
      <Article />
    </section>
  </main>
  <Footer />
</template>