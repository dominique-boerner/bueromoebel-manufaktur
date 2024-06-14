<script setup lang="ts">
defineProps<{
  label: string;
}>()
</script>
<template>
  <li>{{ label }}</li>
</template>