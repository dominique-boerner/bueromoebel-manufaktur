<script setup lang="ts">
import AppBlurContent from '@/components/AppBlurContent.vue'
import AppScreenHeightContent from '@/components/AppScreenHeightContent.vue'
import AppScreenWidthContent from '@/components/AppScreenWidthContent.vue'
import AppDownloadable from '@/components/AppDownloadable.vue'
import AppListItem from '@/components/AppListItem.vue'
import AppList from '@/components/AppList.vue'
import AppProContra from '@/components/AppProContra.vue'
import AbsagePDF from '@/assets/docs/Absage_für_Bewerber.pdf'
import EinladungPDF from '@/assets/docs/E-Mail_Einladung_Vorstellungsgespräch.pdf'
import StellenanzeigePDF from '@/assets/docs/Stellenanzeige_Bürokaufleute.pdf'
import OnboardingPDF from '@/assets/docs/Onboarding_Plan.pdf'
import MusterEinarbeitungsplanPDF from '@/assets/docs/Muster_Einarbeitungsplan.pdf'
import AppProcessBlock from '@/components/AppProcessBlock.vue'
</script>

<template>
  <app-screen-width-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <span class="text-6xl text-primary font-playwrite-netherland">»Your <span class="font-bold text-secondary">comfort</span>, our <span
          class="font-bold text-secondary">Job</span>«</span>
        <span class="absolute left-20 text-[8rem] mb-48 -z-10 text-secondary fi fi-sr-comment-smile" />
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-talent-alt" />
        <article class="text-2xl leading-loose">Bürokaufmänner/-frauen sind die Seele eines Unternehmens. Sie
          organisieren und führen das Büro
          zuverlässig, sodass die anderen Mitarbeiter ihre Fachaufgaben wahrnehmen können. Sie übernehmen kaufmännische
          Aufgaben wie Rechnungsbearbeitung, Buchführung und mitunter auch die Personalverwaltung. Als
          Organisationstalente für die Verwaltung des Büros sind sie Allrounder und werden in allen Branchen benötigt.
        </article>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-question" />
        <span class="text-headline">Was machen Bürokaufmänner/-frauen</span>
        <article class="text-2xl leading-loose">Bürokaufmänner/-frauen verwalten das allgemeine Tagesgeschäft eines
          Unternehmens. Sie bearbeiten Kundenanfragen, schicken Angebote und übernehmen die Rechnungsführung. Sie sind
          dafür verantwortlich, die Organisationsabläufe im Büro zu strukturieren und einen reibungslosen Ablauf zu
          gewährleisten. Sie schlagen neue Arbeits- und Organisationssysteme für die Effizienzsteigerung vor. Außerdem
          sind sie Ansprechpartner für Mitarbeiter in Fragen des Office-Managements. Zudem organisieren sie
          Besprechungen und Konferenzen für das Unternehmen.
        </article>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-face-sunglasses-alt" />
        <span class="text-headline">Interesse geweckt?</span>
        <article class="text-2xl leading-loose">Sie haben Interesse daran große Verantwortung zu Übernehmen? Dann
          schauen Sie sich jetzt unsere Ausschreibung an!
        </article>
        <app-downloadable name="Stellenanzeige_Buerokaufleute.pdf" :url="StellenanzeigePDF" />
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-face-sunglasses-alt" />
        <span class="text-headline">Bewerbungsverfahren? So läuft es bei uns ab!</span>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <span class="text-6xl text-primary">»Assessment-Center? <span
          class="font-bold text-red-500">Nicht mit uns!</span>«</span>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-8xl fi fi-sr-square-plus text-green-500" />
        <span class="text-headline">Vorteile eines Assessment-Centers</span>
        <app-list class="text-2xl w-full leading-loose">
          <app-list-item label="Ganzheitliche Bewertung" />
          <app-list :is-sub-list="true">
            <app-list-item label="Multifunktionale Evaluation" />
            <app-list-item label="Realistische Einblicke" />
          </app-list>
          <app-list-item label="Objektivität und Fairness" />
          <app-list :is-sub-list="true">
            <app-list-item label="Vielfältige Perspektiven" />
            <app-list-item label="Standardisierte Kriterien" />
          </app-list>
          <app-list-item label="Prädiktive Validität" />
          <app-list :is-sub-list="true">
            <app-list-item label="Zuverlässige Prognosen" />
          </app-list>
          <app-list-item label="Entwicklungsmöglichkeiten" />
          <app-list :is-sub-list="true">
            <app-list-item label="Feedback und Förderung" />
          </app-list>
        </app-list>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-8xl fi fi-sr-square-minus text-red-500" />
        <span class="text-headline">Nachteile eines Assessment-Centers</span>
        <app-list class="text-2xl w-full leading-loose">
          <app-list-item label="Hohe Kosten" />
          <app-list :is-sub-list="true">
            <app-list-item label="Ressourcenintensiv" />
            <app-list-item label="Logistischer Aufwand" />
          </app-list>
          <app-list-item label="Stress und Druck" />
          <app-list :is-sub-list="true">
            <app-list-item label="Hohe Anforderung" />
            <app-list-item label="Künstliche Situation" />
          </app-list>
          <app-list-item label="Zeitaufwendig" />
          <app-list :is-sub-list="true">
            <app-list-item label="Lange Dauer" />
            <app-list-item label="Verzögerung im Entscheidungsprozess" />
          </app-list>
          <app-list-item label="Komplexität der Bewertung" />
          <app-list :is-sub-list="true">
            <app-list-item label="Interpretationsspiel" />
            <app-list-item label="Anpassungsprobleme" />
          </app-list>
        </app-list>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <span class="text-headline text-primary">Fazit</span>
        <article class="text-article leading-loose">Dass Assessment-Center ist keine Option.
          Es würde die Kosten zur Rekrutierung neuer Mitarbeiter lediglich erhöhen.
          Unsere Muttergesellschaft setzt jedoch auf UNS.
          Sodass wir, als Tochtergesellschaft, genau wissen, was unsere Muttergesellschaft sich wünscht.
          Deswegen streben wir an entsprechend der Firmenphilosophie, selber Mitarbeiter anzuwerben, die sich mit
          unserer Gesellschaft sowie unserer Muttergesellschaft identifizieren können.
        </article>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <span class="relative text-primary text-8xl fi fi-sr-face-sunglasses-alt" />
        <span class="text-headline">Auswahlkriterien für Bewerber</span>
        <article class="text-article leading-loose">KATZII MUSS SICH HIER NOCH NEN TEXT ÜBERLEGEN *ZWINKERSMILEY*
        </article>
        <app-downloadable name="Auswahlkriterien für Bewerber.pdf" :url="AbsagePDF" />
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content>
        <div class="grid grid-cols-2 grid-rows-2">
          <span class="relative text-primary text-headline fi fi-sr-face-happy" />
          <span class="relative text-primary text-headline fi fi-sr-face-sunglasses-alt" />
          <app-downloadable name="Absage_für_Bewerber.pdf" :url="AbsagePDF" />
          <app-downloadable name="E-Mail_Einladung_Vorstellungsgespräch.pdf" :url="EinladungPDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="flex flex-col gap-10">
        <span class="text-headline text-primary mb-10">Zusage! Nun zum Vertrag...</span>
        <article class="text-article leading-loose">Die Vorbereitung eines Arbeitsvertrags ist ein essenzieller Schritt,
          um die Rechte und Pflichten sowohl des Arbeitgebers als auch des Arbeitnehmers klar festzulegen. Dabei sind
          verschiedene Arten von Arbeitsverträgen zu berücksichtigen, insbesondere Zeit und Zweckbefristete Verträge.
        </article>

        <article class="text-article leading-loose">Gemäß §2 des Nachweisgesetzes ( NachwG ) muss ein schriftlicher
          Arbeitsvertrag mindestens folgende Angaben enthalten:
        </article>

        <app-list class="text-article list-decimal">
          <app-list-item label="Name und Anschrift der Vertragsparteien" />
          <app-list-item label="Beginn des Arbeitsverhältnisses." />
          <app-list-item
            label="Bei befristeten Arbeitsverhältnissen: die vorhersehbare Dauer des Arbeitsverhältnisses." />
          <app-list-item label="Arbeitsort" />
          <app-list-item label="Beschreibung der zu leistenden Tätigkeit." />
          <app-list-item
            label="Zusammensetzung und Höhe des Arbeitsentgelts, einschließlich Zuschlägen, Zulagen, Prämien und Sonderzahlungen sowie deren Fälligkeit." />
          <app-list-item label="Arbeitszeit." />
          <app-list-item label="Dauer des jährlichen Erholungsurlaubs." />
          <app-list-item label="Kündigungsfristen." />
          <app-list-item
            label="Ein in allgemeiner Form gehaltener Hinweis auf die maßgeblichen Tarifverträge, Betriebs oder Dienstvereinbarungen." />
        </app-list>

        <article class="text-article leading-loose">
          Diese Mindestangaben sind notwendig, um die Rechtssicherheit und Klarheit des Arbeitsverhältnisses zu
          gewährleisten.
        </article>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="flex flex-col gap-10">
        <span class="text-headline text-primary mb-10">Zeitbefristeter Arbeitsvertrag</span>
        <article class="text-article leading-loose">Ein zeitbefristeter Arbeitsvertrag ist ein Vertrag, der für eine
          bestimmte Dauer abgeschlossen wird. Er endet automatisch mit dem Ablauf der vereinbarten Zeit. Die
          gesetzlichen Grundlagen für befristete Arbeitsverträge finden sich im Teilzeit und Befristungsgesetz ( TzBfG )
        </article>
        <div class="flex flex-col w-full gap-12 text-article">
          <div class="flex flex-col gap-2">
            <span>Vorteile:</span>
            <app-pro-contra label="Flexibilität für Arbeitgeber, um auf temporäre Personalbedarfe zu reagieren."
                            type="pro" />
            <app-pro-contra label="Möglichkeit für Arbeitnehmer, verschiedene Erfahrungen zu sammeln." type="pro" />
          </div>
          <div class="flex flex-col gap-2">
            <span>Nachteile:</span>
            <app-pro-contra label="Mangelnde Jobsicherheit für Arbeitnehmer." type="contra" />
            <app-pro-contra label="Potentiell geringe Loyalität und Motivation." type="contra" />
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="flex flex-col gap-10">
        <span class="text-headline text-primary mb-10">Zweckbefristete Verträge </span>
        <article class="text-article leading-loose">Ein zweckbefristeter Arbeitsvertrag ist auf die Erreichung eines
          bestimmten Zwecks ausgelegt z.B. die Durchführung eines Projekts. Der Vertrag endet automatisch, wenn der
          Zweck erreicht ist.
        </article>
        <div class="flex flex-col w-full gap-12 text-article">
          <div class="flex flex-col gap-2">
            <span>Vorteile:</span>
            <app-pro-contra label="Klare Zielorientierung und befristeter Einsatz."
                            type="pro" />
            <app-pro-contra label="Planungssicherheit für spezifische Aufgaben." type="pro" />
          </div>
          <div class="flex flex-col gap-2">
            <span>Nachteile:</span>
            <app-pro-contra label="Unsicherheit über den Zeitpunkt des Vertragsendes für Arbeitnehmer." type="contra" />
            <app-pro-contra label="Administrative Aufwände zur Feststellung des Zweckerreichens." type="contra" />
          </div>
        </div>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="flex flex-col gap-10">
        <span class="text-headline text-primary mb-10">Verträge</span>
        <article class="text-article leading-loose">TODO: Verträge hinzufügen</article>
      </app-blur-content>
    </app-screen-height-content>
    <app-screen-height-content>
      <app-blur-content class="relative">
        <span class="text-headline text-primary">Onboarding</span>
        <article class="text-article leading-loose">Unser Plan mit Musterarbeitswoche!</article>
        <div class="flex gap-4">
          <app-downloadable name="Onboarding_Plan.pdf" :url="OnboardingPDF" />
          <app-downloadable name="Muster_Einarbeitungsplan.pdf" :url="MusterEinarbeitungsplanPDF" />
        </div>
      </app-blur-content>
    </app-screen-height-content>
  </app-screen-width-content>
</template>
