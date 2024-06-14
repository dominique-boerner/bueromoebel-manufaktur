<script setup lang="ts">
withDefaults(defineProps<{
  isSubList?: boolean;
}>(), {
  isSubList: false
})
</script>
<template>
  <ul class="list-inside" :class="{
    'list-circle pl-8': isSubList,
    'list-disc': !isSubList
  }">
    <slot />
  </ul>
</template>