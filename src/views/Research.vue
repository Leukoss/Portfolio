<script setup>
import '@/assets/projects.css';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ImpactCard from '../components/ImpactCard.vue';
import ProjectHero from '../components/ProjectHero.vue';
import ProjectIntro from '../components/ProjectIntro.vue';
import ProjectOutro from '../components/ProjectOutro.vue';
import SkillsSection from '../components/SkillsSection.vue';

const { t, locale, messages } = useI18n();

const information = computed(() => [
  {
    title: t('projects.title_project.research.title'),
    subtitle: t('projects.title_project.research.subtitle'),
    p1: t('projects.title_project.research.paragraphs.p1'),
    p2: t('projects.title_project.research.paragraphs.p2'),
  }
]);

const skillsData = computed(() => {
  const items = messages.value[locale.value].projects.title_project.research.skills_section.categories;
  return items ? Object.values(items) : [];
});

const impactsData = computed(() => {
  const items = messages.value[locale.value].projects.title_project.research.impacts_section.categories;
  return items ? Object.values(items) : [];
});
</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      :title="information[0].title"
      :subtitle="information[0].subtitle"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p v-html="information[0].p1"></p>
          <p v-html="information[0].p2"></p>
        </ProjectIntro>

        <SkillsSection :categories="skillsData" />
      </div>
    </section>

    <section class="project-impact-section">
      <h2 class="section-title">{{ t('projects.title_project.research.impacts_section.title') }}</h2>
      <div class="impact-grid">
        <ImpactCard v-for="impact in impactsData" :key="impact.id" :impact="impact" />
      </div>
    </section>

    <ProjectOutro
      :link-text="t('connect')"
      link-to="/#contact"
    />
  </div>
</template>