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
    skills: ['Project Management', 'Stakeholder Communication', 'Cross-Functional Leadership', 'Compliance & Security'],
  },
  {
    id: 2,
    title: 'Technical Skills',
    skills: ['Generative AI', 'Data Science & Parsing', 'Information Retrieval', 'Python & FastAPI', 'Database Structuring', 'Document Understanding'],
  },
];

const impactsData = [
  {
    id: 1,
    title: 'Increased Productivity',
    description: 'Automated a critical, manual workflow, allowing teams to <strong>accelerate preparation for quarterly financial reports</strong> and investor relations meetings.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Guaranteed Data Integrity',
    description: 'Engineered a <strong>secure and compliant AI solution</strong> that not only <strong>minimized human error</strong> but also guarantee the <strong>integrity of core business data</strong>, ensuring all financial information was consistent and reliable for audit and reporting.',
    delay: 1,
  },
  {
    id: 3,
    title: 'Scalable & Robust Design',
    description: 'Developed a <strong>scalable and maintainable system</strong> capable of handling large volumes of internal documents, ensuring long-term operational viability.',
    delay: 2,
  },
];

</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      title="RIIF: Financial Reporting Reinvented"
      subtitle="AI-Driven Solution for Corporate Efficiency"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p>
            In the fast-paced world of financial services, preparing for high-stakes investor briefings and executive meetings requires both speed and precision. As an
            <strong>intern at BNP Paribas</strong>, I developed
            <strong>RIIF</strong>, an intelligent solution that
            <strong>streamlined the process of retrieving and validating key financial data</strong>. This work empowered business teams to
            <strong>shift their focus from time-consuming data retrieval to strategic analysis and communication</strong>.
          </p>
          <p>
            My role involved
            <strong>close collaboration with financial reporting teams</strong>
            to understand their workflows and pain points. By building a tool that provides instant, verifiable answers, I helped ensure
            <strong>data integrity while significantly improving preparation time</strong>
            for major corporate events. This project demonstrates my ability to translate complex business needs into
            <strong>effective, secure, and user-centric technical solutions</strong>.
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