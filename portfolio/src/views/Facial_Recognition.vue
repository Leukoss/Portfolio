<script setup>
import ImpactCard from '../components/ImpactCard.vue';
import ProjectHero from '../components/ProjectHero.vue';
import ProjectIntro from '../components/ProjectIntro.vue';
import ProjectOutro from '../components/ProjectOutro.vue';
import SkillsSection from '../components/SkillsSection.vue';

const skillsData = [
  {
    id: 1,
    title: 'Data & Model Lifecycle',
    skills: ['Dataset Creation', 'Data Annotation', 'Data Augmentation', 'Model Training', 'Hyperparameter Tuning'],
  },
  {
    id: 2,
    title: 'Technical Skills',
    skills: ['Python', 'Computer Vision', 'Convolutional Neural Networks (CNN)', 'OpenCV', 'Scikit-learn', 'TensorFlow & Keras'],
  },
];

const impactsData = [
  {
    id: 1,
    title: 'End-to-End Model Development',
    description: 'Managed the entire machine learning lifecycle, from <strong>custom dataset creation and cleaning</strong> to <strong>model training and evaluation</strong>, demonstrating a comprehensive understanding of the process.',
    delay: 0,
  },
  {
    id: 2,
    title: 'Robust Model Performance',
    description: "Implemented and trained a <strong>Convolutional Neural Network (CNN)</strong> for facial recognition, achieving strong performance on a specialized dataset and validating the model's effectiveness.",
    delay: 1,
  },
  {
    id: 3,
    title: 'Demonstrated Technical Proficiency',
    description: 'Utilized key libraries like <strong>TensorFlow and Keras</strong> to build a robust and scalable model, highlighting practical skills in modern deep learning frameworks.',
    delay: 2,
  },
];

</script>

<template>
  <div class="project-page-container">
    <ProjectHero
      title="Facial Recognition: A Deep Learning Case Study"
      subtitle="Building a CNN-based Model from Scratch"
    />

    <section class="project-details-section">
      <div class="project-details-grid">
        <ProjectIntro>
          <p>
            As a student at <strong>ESIEE Paris</strong>, I undertook a project to build an <strong>end-to-end facial recognition model</strong> using a custom dataset. The challenge was to demonstrate proficiency in every step of a machine learning project, from <strong>data preparation to model deployment</strong>. I chose a unique and engaging dataset—scenes from "Jurassic Park"—to highlight the process of working with real-world, uncurated data.
          </p>
          <p>
            This project required me to <strong>collect and annotate image data</strong>, perform data augmentation, and implement a <strong>Convolutional Neural Network (CNN)</strong> for training. The work showcases my practical skills in <strong>deep learning</strong>, <strong>computer vision</strong>, and <strong>problem-solving</strong>, proving my ability to turn a concept into a functional and demonstrable solution.
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

<style scoped>
.project-page-container {
  color: #333;
  font-family: 'Roboto', sans-serif;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #373737;
}
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 {
  transition-delay: 0.2s;
}
.delay-2 {
  transition-delay: 0.4s;
}
@media (max-width: 768px) {
  .project-details-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
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
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: auto;
}
</style>