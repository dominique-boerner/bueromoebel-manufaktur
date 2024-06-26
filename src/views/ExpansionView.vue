<script setup lang="ts">
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import AppList from '@/components/AppList.vue'
import AppListItem from '@/components/AppListItem.vue'
import checklistePDF from "@/assets/docs/Checkliste zur Evaluierung der Bedürfnisse ausländischer Vertriebsmärkte.pdf"
import AppDownloadable from '@/components/AppDownloadable.vue'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <span class="text-headline text-primary leading-loose text-center">»Vertriebsausweitung ins europäische Ausland!«</span>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="text-article">
        <div class="flex justify-between w-full">
          <div class="flex flex-col w-96 gap-4 bg-white rounded-xl p-8 shadow-xl">
            <span class="text-3xl">Notwendigkeiten</span>
            <app-list>
              <app-list-item label="Markterschließung" />
              <app-list-item label="Wettbewerbsvorteil" />
              <app-list-item label="Diversifikation" />
              <app-list-item label="Kundennähe" />
            </app-list>
          </div>
          <div class="flex flex-col w-96 gap-4 bg-white rounded-xl p-8 shadow-xl">
            <span class="text-3xl">Ziele</span>
            <app-list>
              <app-list-item label="Umsatz steigern" />
              <app-list-item label="Weltmarktführer" />
              <app-list-item label="Produktanpassung" />
              <app-list-item label="Effizienzsteigerung" />
              <app-list-item label="Markenbekanntheit" />
            </app-list>
          </div>
        </div>
        <img alt="" src="@/assets/expansion.png" class="w-64" />
        <div class="flex justify-between w-full">
          <div class="flex flex-col w-96 gap-4 bg-white rounded-xl p-8 shadow-xl">
            <span class="text-3xl">Synergien</span>
            <app-list>
              <app-list-item label="Skaleneffekte" />
              <app-list-item label="Effizienzsteigerung" />
              <app-list-item label="Wissensaustausch" />
              <app-list-item label="Markenbekanntheit" />
              <app-list-item label="Sortiment" />
            </app-list>
          </div>
          <div class="flex flex-col w-96 gap-4 bg-white rounded-xl p-8 shadow-xl">
            <span class="text-3xl">Herausforderungen</span>
            <app-list>
              <app-list-item label="Kulturelle Unterschiede" />
              <app-list-item label="Regulatorische Hindernisse" />
              <app-list-item label="Logistikkomplexität" />
              <app-list-item label="Währungsrisiko" />
              <app-list-item label="Wettbewerb" />
              <app-list-item label="Produktanpassung" />
              <app-list-item label="Finanzielle Investitionen" />
            </app-list>
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <img alt="" src="@/assets/enterprise.png" class="w-64" />
        <span class="text-center text-headline">Bedürfnisse der ausländischen Vertriebsmärkte</span>
        <app-downloadable name="Checkliste zur Evaluierung der Bedürfnisse ausländischer Vertriebsmärkte.pdf" :url="checklistePDF" />
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
