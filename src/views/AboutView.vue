<script setup lang="ts">
import AppDownloadable from '@/components/AppDownloadable.vue'
import AppProContra from '@/components/AppProContra.vue'
import AppIconWithText from '@/components/AppIconWithText.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import protokollGeschaftsfuehrermeetingPDF from '@/assets/docs/Protokoll_Geschäftsführermeeting.pdf'
import emailEinladungGeschaftsfuhrungsmeetingPDF from '@/assets/docs/EMail_Einladung_Geschäftsführermeeting.pdf'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col flex-wrap w-1/2 gap-12">
          <span class="block text-headline">Unsere Ziele</span>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
            <app-icon-with-text icon="fi-sr-career-growth"
                                label="Internationale Personalgewinnung und -entwicklung" />
            <app-icon-with-text icon="fi-sr-graduation-cap"
                                label="Kompetenzentwicklung und Weiterbildung" />
            <app-icon-with-text icon="fi-sr-user-gear"
                                label="Effizientes Personalmanagement" />
            <app-icon-with-text icon="fi-sr-plan-strategy"
                                label="Strategische Personalplanung" />
            <app-icon-with-text icon="fi-sr-leaf"
                                label="Gesellschaftliche Verantwortung" />
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4">
          <span class="block text-headline text-center mb-4">Unsere Organigramme</span>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4">
          <img alt="" src="@/assets/Organigramm_Muttergesellschaft.jpg" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4">
          <img alt="" src="@/assets/Organigramm_Tochtergesellschaft.jpg" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4">
            <span class="block text-headline">GmbH</span>
          <div class="flex flex-col gap-4">
            <div class="flex gap-12">
              <div class="flex flex-col gap-4">
                <span class="text-2xl">Vorteile:</span>
                <app-pro-contra label="Haftungsbeschränkung" type="pro" />
                <app-pro-contra label="Erhöhte Kapitalbeschaffung" type="pro" />
                <app-pro-contra label="Rechtliche Stabilität und Vertrauen" type="pro" />
                <app-pro-contra label="Klare Regelungen und Transparenz" type="pro" />
              </div>
              <div class="flex flex-col gap-4">
                <span class="text-2xl">Nachteile:</span>
                <app-pro-contra label="Höhere Gründungskosten und formale Anforderungen" type="contra" />
                <app-pro-contra label="Publizitätspflichten" type="contra" />
                <app-pro-contra label="Weniger Flexibilität" type="contra" />
              </div>
            </div>
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>

    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4">
          <span class="block text-headline">KG</span>
          <div class="flex gap-12">
            <div class="flex flex-col gap-2">
              <span class="text-2xl">Vorteile:</span>
              <app-pro-contra label="Flexibilität in der Kapitalaufbringung" type="pro" />
              <app-pro-contra label="Steuervorteile" type="pro" />
              <app-pro-contra label="Geringere formale Anforderungen" type="pro" />
              <app-pro-contra label="Hohe Entscheidungsfreiheit" type="pro" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-2xl">Nachteile:</span>
              <app-pro-contra label="Unbeschränkte Haftung der Komplementäre" type="contra" />
              <app-pro-contra label="Begrenzte Kontrollrechte der Kommanditisten" type="contra" />
              <app-pro-contra label="Eingeschränkte Kapitalbeschaffung" type="contra" />
            </div>
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="flex flex-col gap-4 text-center items-center">
          <span class="block text-headline">Warum haben wir uns für eine GmbH entschieden?</span>
          <span class="underline">Anlagen:</span>
          <app-downloadable name="E-Mail_einladung_geschaftsfuhrungsmeeting.pdf"
                            :url="emailEinladungGeschaftsfuhrungsmeetingPDF" />
          <app-downloadable name="Protokoll_geschaftsfuehrermeeting_120624"
                            :url="protokollGeschaftsfuehrermeetingPDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
