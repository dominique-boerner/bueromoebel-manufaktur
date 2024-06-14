<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
import AppHero from '@/components/AppHero.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
</script>

<template>
    <div>
      <app-screen-height-content>
        <app-screen-width-content class="gap-12 bg-primary text-on-primary flex-wrap px-10 py-28 shadow-2xl rounded-2xl">
          <app-navigation />
          <app-hero />
        </app-screen-width-content>
      </app-screen-height-content>
      <main>
        <RouterView />
      </main>
    </div>
</template>