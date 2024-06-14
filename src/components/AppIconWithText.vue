<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
}>()
</script>
<template>
  <div class="flex flex-col">
    <i class="relative w-fit text-4xl fi" :class="icon">
      <div class="bg-secondary/80 -z-10 w-6 aspect-square rounded-md absolute -right-2 -bottom-1"></div>
    </i>
    <span class="text-lg">{{ label }}</span>
  </div>
</template>