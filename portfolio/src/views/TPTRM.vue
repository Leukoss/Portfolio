<script setup>
import ProjectHero from '../components/ProjectHero.vue';
import ProjectIntro from '../components/ProjectIntro.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ProjectOutro from '../components/ProjectOutro.vue';

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
    description: 'Automated a critical, manual workflow, allowing teams to accelerate preparation for quarterly financial reports and investor relations meetings.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Guaranteed Data Integrity',
    description: 'Engineered a secure and compliant AI solution that not only minimized human error but also guarantee the integrity of core business data, ensuring all financial information was consistent and reliable for audit and reporting.',
    delay: 1,
  },
  {
    id: 3,
    title: 'Scalable & Robust Design',
    description: 'Developed a scalable and maintainable system capable of handling large volumes of internal documents, ensuring long-term operational viability.',
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
        <ImpactCard
          v-for="impact in impactsData"
          :key="impact.id"
          :title="impact.title"
          :description="impact.description"
          :delay="impact.delay"
        />
      </div>
    </section>

    <ProjectOutro
      link-text="Let's Connect"
      link-to="/#contact"
    />
  </div>
</template>

<style scoped>
.project-page-container {
  color: #333;
  font-family: 'Roboto', sans-serif;
}
.project-details-section {
  background: #fff;
  padding: 80px 50px;
}
.project-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}
.project-impact-section {
  padding: 80px 50px;
  background: #f0f0f0;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #373737;
}
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: auto;
}
@media (max-width: 768px) {
  .project-details-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>