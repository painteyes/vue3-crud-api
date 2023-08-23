<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 text-center w-full z-2 py-5 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <a href="/" class="">
        <img src="/src/assets/vue.svg" class="inline h-8" alt="Vue Logo">
        <span class="-ml-2 align-middle self-center text-2xl font-semibold whitespace-nowrap dark:text-white">      
          ue3 Composition CRUD with API Call
        </span>
      </a>
      
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
