<script setup lang="ts">
withDefaults(defineProps<{
  url: string;
  name: string;
  type: "pdf" | "word";
}>(), {
  type: "pdf"
})

</script>
<template>
  <div class="flex gap-4">
    <i v-if="type === 'pdf'" class="text-2xl fi fi-sr-file-pdf"></i>
    <i v-if="type === 'word'" class="text-2xl fi fi-sr-file-word"></i>
    <a class="underline" :href="url" download>{{ name }}</a>
  </div>
</template>