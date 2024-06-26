<script setup lang="ts">
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import AppDownloadable from '@/components/AppDownloadable.vue'
import bueroausstattungsmessePDF from '@/assets/docs/Büroausstattungsmesse - Die Belege.pdf'
import reisekostenabrechnungChefDrMusterPDF from '@/assets/docs/Reisekostenabrechnung_Chef_Dr_Muster.pdf'
import reisekostenabrechnungMajaMusterfrauPDF from '@/assets/docs/Reisekostenabrechnung_Maja_Musterfrau.pdf'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex gap-12 items-center">
          <img alt="" src="@/assets/train.png" class="scale-x-[-1] w-64" />
          <div class="flex flex-col gap-4">
            <app-downloadable name="Büroausstattungsmesse - Die Belege.pdf"
                              :url="bueroausstattungsmessePDF" />
            <app-downloadable name="Reisekostenabrechnung_Chef_Dr_Muster.pdf"
                              :url="reisekostenabrechnungChefDrMusterPDF" />
            <app-downloadable name="Reisekostenabrechnung_Maja_Musterfrau.pdf"
                              :url="reisekostenabrechnungMajaMusterfrauPDF" />
          </div>
          <img alt="" src="@/assets/train.png" class="w-64" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
