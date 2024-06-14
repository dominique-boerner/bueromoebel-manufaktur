<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="flex justify-between items-center">
    <span class="text-lg">Büromöbel Manufaktur KG</span>
    <div class="flex gap-4">
      <RouterLink to="/" activeClass="border-b-4 border-secondary">Über uns</RouterLink>
      <RouterLink to="/financials" activeClass="border-b-4 border-secondary">Finanzwesen</RouterLink>
      <RouterLink to="/career" activeClass="border-b-4 border-secondary">Karriere</RouterLink>
      <RouterLink to="/expansion" activeClass="border-b-4 border-secondary">Expansion</RouterLink>
      <RouterLink to="/ausstattungsmesse" activeClass="border-b-4 border-secondary">Ausstattungsmesse</RouterLink>
    </div>
  </nav>
</template>
