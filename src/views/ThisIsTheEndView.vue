<script setup lang="ts">
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import Protokoll1PDF from '@/assets/docs/Protokoll_Nr.1_03062024.pdf'
import Protokoll2PDF from '@/assets/docs/Protokoll_Nr.2_07062024.pdf'
import Protokoll3PDF from '@/assets/docs/Protokoll_Nr.3_11062024.pdf'
import Protokoll4PDF from '@/assets/docs/Protokoll_Nr_4_17062024.pdf'
import Protokoll5PDF from '@/assets/docs/Protokoll_Nr_5_18062024.pdf'
import Protokoll6PDF from '@/assets/docs/Protokoll_Nr_6_19062024.pdf'
import Protokoll7PDF from '@/assets/docs/Protokoll_Nr_7_26062024.pdf'
import Protokoll8PDF from '@/assets/docs/Protokoll_Nr_8_27062024.pdf'
import MahnungVorlagePDF from '@/assets/docs/1_mahnung_vorlage.pdf'
import LetzteMahnungPDF from '@/assets/docs/Letzte_Mahnung.pdf'
import RechnungVorlagePDF from '@/assets/docs/Rechnung_Vorlage.pdf'
import ZusatzaufgabenPDF from '@/assets/docs/Zusatzaufgaben.pdf'
import AppDownloadable from '@/components/AppDownloadable.vue'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col items-center flex-wrap w-1/2 gap-12 mb-24">
          <span class="block text-headline">Unsere Ziele</span>
          <img alt="" src="@/assets/to-do-list.png" class="w-48" />
          <app-downloadable name="Protokoll_Nr.1_03062024.pdf" :url="Protokoll1PDF" />
          <app-downloadable name="Protokoll_Nr.2_07062024.pdf" :url="Protokoll2PDF" />
          <app-downloadable name="Protokoll_Nr.3_11062024.pdf" :url="Protokoll3PDF" />
          <app-downloadable name="Protokoll_Nr_4_17062024.pdf" :url="Protokoll4PDF" />
          <app-downloadable name="Protokoll_Nr_5_18062024.pdf" :url="Protokoll5PDF" />
          <app-downloadable name="Protokoll_Nr_6_19062024.pdf" :url="Protokoll6PDF" />
          <app-downloadable name="Protokoll_Nr_7_26062024.pdf" :url="Protokoll7PDF" />
          <app-downloadable name="Protokoll_Nr_8_27062024.pdf" :url="Protokoll8PDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col items-center flex-wrap w-1/2 gap-12 mb-24">
          <img alt="" src="@/assets/file.png" class="w-48" />
          <app-downloadable name="1_mahnung_vorlage.pdf" :url="MahnungVorlagePDF" />
          <app-downloadable name="Letzte_Mahnung.pdf" :url="LetzteMahnungPDF" />
          <app-downloadable name="Rechnung_Vorlage.pdf" :url="RechnungVorlagePDF" />
          <app-downloadable name="Zusatzaufgaben.pdf" :url="ZusatzaufgabenPDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col items-center flex-wrap w-1/2 gap-12 mb-24">
          <img alt="" src="@/assets/end.png" class="w-48" />
          <span class="text-article">Es bedanken sich:</span>
          <span class="text-article text-center">Johanna Bakun, Lena Beit, Vanessa Holzschuh, David Kahl & Antje Ollmann</span>
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
