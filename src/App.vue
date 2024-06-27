<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
import AppHero from '@/components/AppHero.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import quackSound from "@/assets/quack_5.mp3"
import { ref } from 'vue'

const isGooseHovered = ref(false)

const quack = new Audio(quackSound)
quack.volume = 0.1
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
    <img v-if="isGooseHovered"
         alt=""
         src="@/assets/hello.png"
         class="h-24 bottom-20 right-24 fixed cursor-pointer drop-shadow-2xl" />
    <img alt=""
         src="@/assets/goose.png"
         class="scale-x-[-1] h-24 fixed bottom-2 right-2 cursor-pointer"
         @click="quack.play()"
         @mouseenter="isGooseHovered = true"
         @mouseleave="isGooseHovered = false" />
  </div>
</template>