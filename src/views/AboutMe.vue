<script setup>
import { ref } from 'vue';

const vAnimateOnScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observerInstance.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    el._observer = observer;
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect();
    }
  },
};

const timelineData = ref([
  {
    year: '2025',
    title: 'Graduate Engineer - Data Science & AI',
    description: 'Completed a Master’s Level Engineering degree with a specialization in Data Science and AI, focusing on Machine Learning, Deep Learning, Generative AI, MLOps, and Data Visualization. Ranked in the <strong>top 5% of my promotion</strong> and graduated as <strong>Technical Valedictorian</strong>.',
    company: 'ESIEE Paris',
    logo: '/img/esiee_logo.png',
  },
  {
    year: '2025',
    title: 'Internship - Data Scientist/ML Engineer',
    description: 'Developed AI tools (RAG, NLP) to automate financial analysis and contract assessment. Focused on enhancing productivity and ensuring data integrity for financial reporting teams.',
    company: 'BNP Paribas IT Group',
    logo: '/img/bnpparibas_logo.png',
  },
  {
    year: '2024',
    title: 'Internship - Data Science Researcher',
    description: 'Conducted R&D on predicting properties of eco-concrete using supervised ML models. Authored a comprehensive report in English, demonstrating expertise in scientific research and technical communication.',
    company: 'Gustave Eiffel University & ENPC',
    logo: '/img/gustave_eiffel_logo.png',
  },
  {
    year: '2023',
    title: 'Erasmus Semester - Engineering Sciences',
    description: 'Completed a multidisciplinary program in Engineering Sciences at the Università di Bologna, gaining international exposure and a broader perspective on engineering principles.',
    company: 'Università di Bologna',
    logo: '/img/unibo_logo.png',
  },
  {
    year: '2022',
    title: 'IT Technician',
    description: 'Provided technical IT support to over 700 people, developing strong problem-solving and communication skills in a professional corporate environment.',
    company: 'Milleis Banque Privée',
    logo: '/img/milleis_logo.png',
  },
]);

const skillsData = ref([
  {
    title: 'AI & Data Science',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'NLP',
      'Data Modeling',
      'MLOps',
      'OpenAI',
      'Langchain',
    ],
  },
  {
    title: 'Programming & Infrastructure',
    skills: [
      'Python',
      'R',
      'Vue',
      'FastAPI',
      'Flask',
      'Django',
      'Git',
      'Docker',
      'SQL',
    ],
  },
  {
    title: 'Data Science Libraries & Tools',
    skills: [
      'Scikit-Learn',
      'Pandas',
      'Numpy',
      'TensorFlow',
      'Keras',
      'Multithreading',
      'PyMuPDF',
      'Seaborn',
      'Plotly',
      'Dash',
      'Optuna',
    ],
  },
  {
    title: 'Professional & Business Skills',
    skills: [
      'Project Management',
      'Technical Writing',
      'Problem-Solving',
      'Stakeholder Communication',
      'Onboarding',
    ],
  },
]);
</script>

<template>
  <div class="about-page-container">
    <section class="intro-section">
      <div class="intro-content fade-in-up" v-animate-on-scroll>
        <h1 class="intro-title">About Me</h1>
        <div class="intro-divider"></div>
        <p class="intro-text">
          I'm a <strong>passionate Graduate Engineer specializing in Data Science and AI</strong>, with a proven track record of developing innovative, data-driven solutions for complex business problems. From automating financial reporting at BNP Paribas to building predictive models for sustainable engineering, my experience is defined by a commitment to creating efficient, robust, and impactful technical solutions.
        </p>
        <p class="intro-text">
          My academic journey, combined with practical internships, has equipped me with a strong foundation in <strong>AI/ML project lifecycles</strong>, from data preparation and model training to deployment and stakeholder communication. I thrive in collaborative environments and am eager to apply my skills to drive profitability and operational efficiency.
        </p>
      </div>
    </section>

    <section class="timeline-section">
      <h2 class="timeline-title fade-in-up" v-animate-on-scroll>My Journey</h2>
      <div class="timeline-container">
        <div
          v-for="(item, index) in timelineData"
          :key="index"
          class="timeline-item fade-in-up"
          v-animate-on-scroll
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-content">
            <h3 class="timeline-heading">{{ item.title }}</h3>
            <p class="timeline-company">
              {{ item.company }}
            </p>
            <p class="timeline-description" v-html="item.description"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="skills-title fade-in-up" v-animate-on-scroll>My Skills</h2>
      <div class="skills-grid">
        <div
          v-for="(category, index) in skillsData"
          :key="index"
          class="skills-category-block fade-in-up"
          v-animate-on-scroll
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skill-items">
            <span
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="skill-item"
            >{{ skill }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page-container {
  color: #333;
  font-family: 'Roboto', sans-serif;
  padding: 50px 0;
}

section {
  padding: 80px 50px;
  text-align: center;
}

.intro-section {
  background-color: #f8f9fa;
}

.intro-content {
  max-width: 800px;
  margin: auto;
}

.intro-title {
  font-size: 3rem;
  font-weight: 700;
  color: #373737;
  margin-bottom: 20px;
}

.intro-divider {
  width: 100px;
  height: 3px;
  background-color: #cf9b64;
  margin: 0 auto 30px;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.timeline-section {
  background-color: #fff;
}

.timeline-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #373737;
  margin-bottom: 80px;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 800px;
  margin: auto;
  padding-left: 20px;
}

.timeline-container::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #cf9b64;
  top: 0;
  bottom: 0;
  left: 47px;
  margin-left: -3px;
}

.timeline-item {
  padding: 10px 0 10px 60px;
  position: relative;
  text-align: left;
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  right: auto;
  background-color: #cf9b64;
  border: 4px solid #cf9b64;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  left: 13px;
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #cf9b64;
  position: absolute;
  top: 10px;
  left: -60px;
  text-align: right;
  width: 50px;
}

.timeline-heading {
  font-size: 1.4rem;
  font-weight: 600;
  color: #373737;
  margin: 0 0 5px;
}

.timeline-company {
  font-size: 1rem;
  font-style: italic;
  color: #777;
  margin: 0 0 10px;
}

.timeline-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.skills-section {
  background-color: #f0f0f0;
}

.skills-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #373737;
  margin-bottom: 50px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.skills-category-block {
  flex: 1 1 300px;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
}

.skills-category-block:hover {
  transform: translateY(-5px);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #373737;
  margin-bottom: 20px;
  text-align: center;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill-item {
  background-color: #e8f0fe;
  color: #373737;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #cf9b64;
  color: #fff;
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
</style>