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
    title: 'Management & Communication',
    skills: [
      'Stakeholder Communication', 'Requirements Analysis',
      'Agile Methodologies', 'User-Centric Design'
    ],
  },
  {
    id: 2,
    title: 'Technical Skills',
    skills: [
      'Python', 'Pandas', 'Generative AI', 'Parsing/Chunking', 'Streamlit',
      'RAG', 'Multithreading'
    ],
  },
];

const impactsData = [
  {
    id: 1,
    title: 'Reduced Review Time',
    description: 'Developed an automated contract analysis tool that <strong>cut the average review time by 75%</strong>, allowing legal and business teams to focus on critical tasks.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Increased Accuracy',
    description: '<strong>Engineered a system to automate subjective tasks</strong>, which helped <strong>significantly reduce human error</strong> and ensure data integrity, thereby minimizing compliance risks.',
    delay: 1,
  },
  {
    id: 3,
    title: 'Enhanced User Experience',
    description: 'Led workshops with end-users and iteratively improved the tool’s design based on feedback, resulting in a <strong>highly intuitive and user-centric solution</strong>.',
    delay: 2,
  },
];
</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      title="TPTRM: Accelerating Contract Analysis"
      subtitle="An AI Solution for Faster, More Accurate Legal Review"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p>
            During my internship at <strong>BNP Paribas IT Group</strong>, I
            developed a tool to <strong>automate contract analysis</strong>, a
            critical and time-consuming process for the legal and compliance
            teams. This solution, named <strong>TPTRM</strong>, streamlined the
            review workflow by <strong>automatically parsing documents and
            highlighting key clauses</strong>, significantly reducing manual
            effort.
          </p>
          <p>
            My role involved <strong>working closely with end-users</strong> to
            understand their pain points and ensure the tool's features
            directly addressed their needs. By integrating user feedback
            through workshops and iterative design, I created a solution that
            not only improved efficiency but also <strong>minimized human error</strong>
            and provided a <strong>more user-friendly experience</strong>. This
            project demonstrates my ability to build robust and scalable
            applications that meet complex business requirements.
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