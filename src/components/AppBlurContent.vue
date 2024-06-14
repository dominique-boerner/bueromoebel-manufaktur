<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const scrollElement = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  scrollElement,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
  },
  {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }
)
</script>
<template>
  <div class="flex flex-col flex-wrap my-16 gap-24 justify-center items-center transition min-h-[40%] w-full" ref="scrollElement" :class="{
      'blur-none!': isVisible,
      'blur-md': !isVisible
    }">
    <slot />
  </div>
</template>