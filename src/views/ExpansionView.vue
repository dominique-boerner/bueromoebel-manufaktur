<script setup lang="ts">
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import AppList from '@/components/AppList.vue'
import AppListItem from '@/components/AppListItem.vue'
// import checklisteDOCX from "@/assets/docs/Checkliste zur Evaluierung der Bedürfnisse ausländischer Vertriebsmärkte.docx"
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
      <app-blur-content>
        <table class="text-xl border border-primary p-4">
          <thead class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <th class="border border-primary p-4">Notwendigkeiten</th>
            <th class="border border-primary p-4">Ziele</th>
            <th class="border border-primary p-4">Synergien</th>
            <th class="border border-primary p-4">Herausforderungen</th>
          </tr>
          </thead>
          <tbody class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Markterschließung" />
                <app-list-item label="Wettbewerbsvorteil" />
                <app-list-item label="Diversifikation" />
                <app-list-item label="Kundennähe" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Umsatz steigern" />
                <app-list-item label="Weltmarktführer" />
                <app-list-item label="Produktanpassung" />
                <app-list-item label="Effizienzsteigerung" />
                <app-list-item label="Markenbekanntheit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Skaleneffekte" />
                <app-list-item label="Effizienzsteigerung" />
                <app-list-item label="Wissensaustausch" />
                <app-list-item label="Markenbekanntheit" />
                <app-list-item label="Sortiment" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Kulturelle Unterschiede" />
                <app-list-item label="Regulatorische Hindernisse" />
                <app-list-item label="Logistikkomplexität" />
                <app-list-item label="Währungsrisiko" />
                <app-list-item label="Wettbewerb" />
                <app-list-item label="Produktanpassung" />
                <app-list-item label="Finanzielle Investitionen" />
              </app-list>
            </td>
          </tr>
          </tbody>
        </table>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-question" />
        <span class="text-center text-headline">»Bedürfnisse der ausländischen Vertriebsmärkte«</span>
        <span class="text-center text-sub-headline">Unsere Checkliste zur Evaluierung der Bedürfnisse ausländischer Vertriebsmärkte</span>
<!--        <app-downloadable type="word" name="Checkliste zur Evaluierung der Bedürfnisse ausländischer Vertriebsmärkte.docx" :url="checklisteDOCX" />-->
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-question" />
        <span class="text-headline">Fazit</span>
        <article class="text-article leading-loose">Die geplante Vertriebsausweitung auf das europäische und später auf
          das
          transatlantische Ausland ist für die
          Büromöbel Manufaktur KG notwendig, um langfristiges Wachstum zu sichern und die Marktstellung zu stärken.
          Synergien wie Skaleneffekte, Innovationspotenzial und strategische Partnerschaften können genutzt werden,
          während Herausforderungen wie Marktkenntnisse, Logistik und kulturelle Unterschiede durch sorgfältige Planung
          und die Gründung einer spezialisierten Personalmanagement-Tochtergesellschaft bewältigt werden müssen.
        </article>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
