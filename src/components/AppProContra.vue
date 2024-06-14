<script setup lang="ts">
defineProps<{
  type: "pro" | "contra";
  label: string;
}>()
</script>
<template>
  <span class="flex gap-2 text-xl">
    <i v-if="type === 'pro'" class="fi fi-sr-square-plus text-green-500"></i>
    <i v-if="type === 'contra'" class="fi fi-sr-square-minus text-red-500"></i>
    {{ label }}
  </span>
</template>
