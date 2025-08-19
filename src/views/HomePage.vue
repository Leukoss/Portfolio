<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import { ref } from 'vue';

const projects = ref([
  {
    title: 'RIIF',
    description: `A confidential, <strong>AI-driven Q&A solution</strong> that significantly <strong>accelerates preparation</strong> for <strong>financial reporting</strong> and executive briefings to answer investor questions.`,
    logoSrc: 'img/bnpparibas_logo.png',
    logoAlt: 'BNP Paribas Logo',
    linkTo: '/RIIF',
  },
  {
    title: 'TPTRM',
    description: `Developed a tool for <strong>automated contract analysis</strong>, significantly <strong>reducing review time</strong> and human error through user-centric design.`,
    logoSrc: 'img/bnpparibas_logo.png',
    logoAlt: 'BNP Paribas Logo',
    linkTo: '/TPTRM',
  },
  {
    title: 'Accidentology',
    description: `<strong>Predicting accident severity</strong> from over <strong>1 million road accidents</strong> to provide actionable insights into traffic safety using supervised learning.`,
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Accidentology',
  },
  {
    title: 'Research',
    description: `Interdisciplinary research on eco-concrete, leveraging <strong>predictive models</strong> to optimize formulations and <strong>reduce</strong> environmental impact.`,
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Research',
  },
  {
    title: 'Facial Recognition',
    description: `Developed a <strong>facial recognition model</strong> using a custom dataset from "Jurassic Park" to demonstrate the end-to-end process of dataset creation and <strong>model training</strong>.`,
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Research',
  },
]);

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
      {
        threshold: 0.2,
      }
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
</script>

<template>
  <div class="portfolio-container">
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-title-container">
          <h1 v-animate-on-scroll class="fade-in-up">Lucas SALI--ORLIANGE</h1>
          <div class="divider"></div>
          <p v-animate-on-scroll class="fade-in-up delay-1"><strong>Data Scientist | AI/ML Engineer</strong></p>
          <div class="divider"></div>
        </div>
        <p v-animate-on-scroll class="fade-in-up delay-2 intro-text">
          Based on the ideas you provided, here is a presentation summary
          that is concise, professional, and tailored for a business-oriented
          audience.<br /><br />
          I am a passionate developer who specializes in applying
          <strong>Artificial Intelligence to financial business
            problems</strong>. My approach is collaborative; I work directly
          with business operators to <strong>improve existing processes and
            increase profitability</strong>. All my solutions are built to
          be <strong>robust, scalable, and efficient</strong>, focusing
          on clean code and rapid delivery.
        </p>
      </div>
    </section>

    <section id="projects" class="projects-section">
      <h2 class="section-title">My Projects</h2>
      <div class="project-grid">
        <ProjectCard
          v-for="(project, index) in projects"
          v-animate-on-scroll
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :logoSrc="project.logoSrc"
          :logoAlt="project.logoAlt"
          :linkTo="project.linkTo"
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        />
      </div>
    </section>

    <section id="skills" class="skills-section">
      <h2 class="section-title">My Skills</h2>
      <div class="skills-container">
        <div v-animate-on-scroll class="skills-category-block fade-in-up">
          <h3 class="category-title">AI & Data Science</h3>
          <p class="category-description">Expertise in applying data-driven solutions to business problems.</p>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-name">Machine Learning</span></div>
            <div class="skill-item"><span class="skill-name">Deep Learning</span></div>
            <div class="skill-item"><span class="skill-name">NLP</span></div>
            <div class="skill-item"><span class="skill-name">Computer Vision</span></div>
            <div class="skill-item"><span class="skill-name">Time Series Analysis</span></div>
            <div class="skill-item"><span class="skill-name">Project Lifecycle</span></div>
          </div>
        </div>
        <div v-animate-on-scroll class="skills-category-block fade-in-up delay-1">
          <h3 class="category-title">Programming & Tools</h3>
          <p class="category-description">A robust technical foundation for building scalable solutions.</p>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-name">Python</span></div>
            <div class="skill-item"><span class="skill-name">SQL</span></div>
            <div class="skill-item"><span class="skill-name">Git</span></div>
            <div class="skill-item"><span class="skill-name">Docker</span></div>
            <div class="skill-item"><span class="skill-name">Linux</span></div>
            <div class="skill-item"><span class="skill-name">Vue</span></div>
          </div>
        </div>
        <div v-animate-on-scroll class="skills-category-block fade-in-up delay-2">
          <h3 class="category-title">Professional Skills</h3>
          <p class="category-description">My ability to communicate and collaborate effectively in a team.</p>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-name">Technical Writing</span></div>
            <div class="skill-item"><span class="skill-name">Communication</span></div>
            <div class="skill-item"><span class="skill-name">Problem-Solving</span></div>
            <div class="skill-item"><span class="skill-name">Research</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <h2 class="section-title">Get in Touch</h2>
      <p v-animate-on-scroll class="contact-text fade-in-up">
        Feel free to connect with me to discuss potential opportunities or collaborations.
      </p>
      <div v-animate-on-scroll class="contact-links fade-in-up delay-1">
        <a href="https://www.linkedin.com/in/lucas-sali-orliange-65598a21a/" target="_blank" class="contact-link">LinkedIn</a>
        <a href="https://github.com/Leukoss" target="_blank" class="contact-link">GitHub</a>
        <a href="mailto:lucas.saliorliange.pro@gmail.com" class="contact-link">Email</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-container {
  color: #333;
  font-family: 'Roboto', sans-serif;
}

section {
  padding: 100px 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #373737;
}

.hero-section {
  background: #f8f9fa;
  min-height: 100vh;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #373737;
  letter-spacing: -2px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #555;
}

.intro-text {
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.6;
}

.projects-section {
  background: #fff;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
}

.skills-section {
  background: #f0f0f0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 1200px;
}

.skills-category-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #373737;
  margin-bottom: 10px;
}

.category-description {
  max-width: 400px;
  text-align: center;
  color: #555;
  margin-bottom: 20px;
}

.skill-item {
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skill-item:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #CF9B64 100%, transparent 100%) no-repeat left top / 0 2px, linear-gradient(to right, #CF9B64 100%, transparent 100%) no-repeat left bottom / 0 2px, linear-gradient(to bottom, #CF9B64 100%, transparent 100%) no-repeat right top / 2px 0, linear-gradient(to bottom, #CF9B64 100%, transparent 100%) no-repeat left top / 2px 0;
  background-size: 0 2px, 0 2px, 2px 0, 2px 0;
  transition: background-size 0.5s ease-in-out;
}

.skill-item:hover:before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}

.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}

.contact-section {
  background: #fff;
}

.contact-text {
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 30px;
  color: #555;
}

.contact-links {
  display: flex;
  gap: 20px;
}

.contact-link {
  position: relative;
  display: inline-block;
  font-size: 1.1rem;
  color: #373737;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 5px 10px;
  z-index: 1;
}

.contact-link:hover {
  color: #CF9B64;
}

.contact-link:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #CF9B64 100%, transparent 100%) no-repeat left top / 0 2px, linear-gradient(to right, #CF9B64 100%, transparent 100%) no-repeat left bottom / 0 2px, linear-gradient(to bottom, #CF9B64 100%, transparent 100%) no-repeat right top / 2px 0, linear-gradient(to bottom, #CF9B64 100%, transparent 100%) no-repeat left top / 2px 0;
  background-size: 0 2px, 0 2px, 2px 0, 2px 0;
  transition: background-size 0.8s ease-in-out;
}

.contact-link:hover:before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}

/* Make sure elements are hidden by default with a transition property */
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

.delay-3 {
  transition-delay: 0.6s;
}

.delay-4 {
  transition-delay: 0.8s;
}

.delay-5 {
  transition-delay: 1s;
}

.hero-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.divider {
  width: 50%;
  height: 2px;
  background-color: #CF9B64;
  margin: 10px 0;
  animation: drawLine 1s ease-in-out forwards;
}

@keyframes drawLine {
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
}
</style>