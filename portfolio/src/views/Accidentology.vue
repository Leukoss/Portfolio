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
    title: 'Data Analysis & Modeling',
    skills: [
      'Feature Engineering', 'Supervised Learning',
      'Model Evaluation', 'Data Visualization'
    ],
  },
  {
    id: 2,
    title: 'Technical Skills',
    skills: [
      'Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Optuna',
      'Seaborn', 'Plotly'
    ],
  },
];

const impactsData = [
  {
    id: 1,
    title: 'High-Accuracy Predictive Model',
    description: 'Developed a supervised learning model that achieved an <strong>86% accuracy rate</strong> in predicting accident severity, providing a robust tool for traffic safety analysis.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Data-Driven Insights',
    description: 'Conducted in-depth analysis on a dataset of <strong>over 1 million road accidents</strong>, identifying key factors influencing accident severity and providing actionable insights for safety initiatives.',
    delay: 1,
  },
  {
    id: 3,
    title: 'End-to-End Analysis',
    description: 'Managed the full data science lifecycle, from <strong>preprocessing and feature engineering</strong> to <strong>model training and comparison</strong>, demonstrating a comprehensive understanding of data analysis workflows.',
    delay: 2,
  },
];
</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      title="Road Accident Severity Prediction"
      subtitle="Applying Data Science to Enhance Traffic Safety"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p>
            As a student project at <strong>ESIEE Paris</strong>, I undertook a comprehensive <strong>data analysis project</strong> focused on a dataset of over <strong>1 million road accidents since 2010</strong>. The primary goal was to build a predictive model that could accurately estimate the severity of an accident based on various factors, such as weather conditions, road type, and time of day.
          </p>
          <p>
            My role involved the entire <strong>data science lifecycle</strong>, from cleaning and preprocessing the raw data to performing <strong>feature engineering</strong> to optimize model performance. By applying a range of <strong>supervised learning methods</strong>, I was able to build a robust model that provides valuable insights into traffic safety, which could inform preventative strategies.
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