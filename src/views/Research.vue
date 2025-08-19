<script setup>
import ImpactCard from '../components/ImpactCard.vue';
import ProjectHero from '../components/ProjectHero.vue';
import ProjectIntro from '../components/ProjectIntro.vue';
import ProjectOutro from '../components/ProjectOutro.vue';
import SkillsSection from '../components/SkillsSection.vue';

import '@/assets/projects.css';

const skillsData = [
  {
    id: 1,
    title: 'Research & Analysis',
    skills: [
      'Literature Review', 'Hypothesis Testing', 'Predictive Modeling',
      'Statistical Analysis', 'Technical Writing (LaTeX)'],
  },
  {
    id: 2,
    title: 'Technical Skills',
    skills: [
      'Python & Scikit-learn', 'XGBoost', 'LightGBM', 'Data Engineering',
      'Data Visualization'],
  },
];

const impactsData = [
  {
    id: 1,
    title: 'Optimized Material Formulation',
    description: 'Developed advanced <strong>predictive models (XGBoost, LightGBM)</strong> to estimate the mechanical properties of eco-concrete, enabling researchers to optimize material composition and <strong>reduce environmental impact</strong>.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Streamlined Research Workflow',
    description: 'Automated data analysis and a literature review process, which <strong>accelerated the research cycle</strong> and provided a robust framework for testing multiple hypotheses with greater efficiency.',
    delay: 1,
  },
  {
    id: 3,
    title: 'Effective Scientific Communication',
    description: 'Authored a <strong>comprehensive technical report in English using LaTeX</strong>, effectively communicating complex methodologies and research findings to a broader scientific audience.',
    delay: 2,
  },
];
</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      title="Applied Research: Eco-Concrete"
      subtitle="Leveraging Data Science for Sustainable Engineering"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p>
            During my internship as a <strong>Data Science Researcher</strong>
            at <strong>Université Gustave Eiffel & ENPC</strong>, I conducted
            interdisciplinary research on eco-concrete formulation. The
            project's goal was to leverage machine learning to
            <strong>predict the mechanical properties of concrete</strong>,
            helping to <strong>optimize its composition</strong> and
            <strong>reduce its carbon footprint</strong> by incorporating
            recycled materials.
          </p>
          <p>
            My role was to <strong>build and validate predictive models</strong>
            from a large dataset. I conducted a comprehensive
            <strong>literature review</strong> and applied advanced algorithms
            like XGBoost and LightGBM to identify the most impactful variables.
            This work demonstrates my ability to apply a <strong>rigorous
              scientific approach</strong> to complex problems, transforming
              raw data into actionable insights for sustainable engineering.
          </p>
        </ProjectIntro>

        <SkillsSection :categories="skillsData" />
      </div>
    </section>

    <section class="project-impact-section">
      <h2 class="section-title">Impact & Key Contributions</h2>
      <div class="impact-grid">
        <ImpactCard v-for="impact in impactsData" :key="impact.id" :impact="impact" />
      </div>
    </section>

    <ProjectOutro
      link-text="Let's Connect"
      link-to="/#contact"
    />
  </div>
</template>