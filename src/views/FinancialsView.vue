<script setup lang="ts">
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppList from '@/components/AppList.vue'
import AppListItem from '@/components/AppListItem.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import KostenplanPDF from '@/assets/docs/Kostenplan.pdf'
import AppDownloadable from '@/components/AppDownloadable.vue'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <div class="absolute">
          <img alt="" class="opacity-10" src="@/assets/pay.png" />
        </div>
        <table class="border border-primary p-4">
          <thead class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <th class="border border-primary p-4"></th>
            <th class="relative border border-primary p-4 font-bold font-sans">
              Innenfinanzierung = Geld kommt von Innen
            </th>
            <th class="border border-primary p-4 font-bold font-sans">Außenfinanzierung = Geld kommt von außen</th>
          </tr>
          </thead>
          <tbody class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Eigenfinanzierung</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Überschussfinanzierung" />
                <app-list :is-sub-list="true">
                  <app-list-item label="Selbstfinanzierung" />
                  <app-list-item label="Finanzierung aus AfA" />
                </app-list>
                <app-list-item label="Finanzierung aus Vermögensumschichtung" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Beteiligungsfinanzierung" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Fremdfinanzierung</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Finanzierung aus Rückstellungen" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Kreditfinanzierung" />
                <app-list :is-sub-list="true">
                  <app-list-item label="kurzfristig" />
                  <app-list-item label="langfristig" />
                </app-list>
              </app-list>
            </td>
          </tr>
          </tbody>
        </table>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="flex flex-col">
        <div class="flex items-center gap-5 w-full">
          <span class="text-5xl fi fi-sr-megaphone" />
          <div class="flex flex-col">
            <span class="text-2xl">Productplacement</span>
            <span>In Filme, TV-Shows etc. gegen Bezahlung</span>
          </div>
        </div>
        <div class="flex items-center gap-5 w-full">
          <span class="text-5xl fi fi-sr-ad-paid" />
          <div class="flex flex-col">
            <span class="text-2xl">Sponsoring</span>
            <span>Gewinnung von Sponsoren, die die GmbH finanziell unterstützen gegen Werbung oder Unternehmensmaterialien</span>
          </div>
        </div>
        <div class="flex items-center gap-5 w-full">
          <span class="text-5xl fi fi-sr-users-class" />
          <div class="flex flex-col">
            <span class="text-2xl">Crowdfunding</span>
            <span>Geld gegen Prämien</span>
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="absolute">
          <img alt="" class="opacity-10" src="@/assets/transfer.png" />
        </div>
        <table class="border border-primary p-4">
          <thead class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <th class="border border-primary p-4"></th>
            <th class="relative border border-primary p-4 font-bold font-sans">
              Festdarlehen
            </th>
            <th class="border border-primary p-4 font-bold font-sans">
              Annuitätendarlehen
            </th>
            <th class="border border-primary p-4 font-bold font-sans">
              Tilgungsdarlehen
            </th>
          </tr>
          </thead>
          <tbody class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Rate</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Geringere monatliche Rate tilgen nur die Zinskosten" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Feste Monatliche Rate über die gesamte Laufzeit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Sinkende monatliche Rate während der Laufzeit" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Tilgung</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Vollständige Tilgung erst am Ende der Laufzeit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Höhere Tilgungsanteil am Ende, niedrigerer Anteil am Anfang der Rückzahlung" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Gleichbleibende Tilgungshöhe über die gesamte Laufzeit" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Zinsen</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Gleichbleibende Zinsbelastung über die gesamte Laufzeit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Sinkende Zinsbelastung über die Laufzeit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Sinkende Zinsbelastung über die Laufzeit" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Restschuld</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Tilgung der Restschuld erst am Ende der Laufzeit" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Im Vergleich zum Tilgungsdarlehen langsamer Tilgung der Restschuld" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Schnellere Tilgung der Restschuld" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Sicherheit</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Bürgschaft, Grundschuld, Sicherungsübereignung" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Bürgschaft, Grundschuld, Sicherungsübereignung" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Bürgschaft, Grundschuld, Sicherungsübereignung" />
              </app-list>
            </td>
          </tr>
          </tbody>
        </table>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="absolute">
          <img alt="" class="opacity-10" src="@/assets/transfer.png" />
        </div>
        <table class="border border-primary p-4">
          <thead class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <th class="border border-primary p-4"></th>
            <th class="relative border border-primary p-4 font-bold font-sans">
              Leasing
            </th>
            <th class="border border-primary p-4 font-bold font-sans">
              Factoring
            </th>
          </tr>
          </thead>
          <tbody class="border border-primary p-4">
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Rate</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Finanzierung durch Miete statt Kauf" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Verkauf von Forderungen an ein Factoring-Unternehmen" />
              </app-list>
            </td>
          </tr>
          <tr class="border border-primary p-4">
            <td class="border border-primary p-4">Sicherheit</td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Eigentumsvorbehalt" />
                <app-list-item label="Sicherungsübereignung" />
              </app-list>
            </td>
            <td class="border border-primary p-4">
              <app-list>
                <app-list-item label="Abtretung der Forderungen" />
                <app-list-item label="Regressanspruch" />
              </app-list>
            </td>
          </tr>
          </tbody>
        </table>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4 text-center items-center">
          <span class="underline">Anlage:</span>
          <app-downloadable name="Kostenplan.pdf"
                            :url="KostenplanPDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
