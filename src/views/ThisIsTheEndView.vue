<script setup lang="ts">
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col items-center flex-wrap w-1/2 gap-12">
          <span class="block text-headline">Unsere Ziele</span>
          <img alt="" src="@/assets/to-do-list.png" class="w-48" />
          <img alt="" src="@/assets/file.png" class="w-48" />
          <img alt="" src="@/assets/end.png" class="w-48" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
