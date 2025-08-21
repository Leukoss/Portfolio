<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale, messages } = useI18n();

const projects = computed(() => [
  {
    title: t('home.projects_section.riif.title'),
    description: t('home.projects_section.riif.description'),
    logoSrc: 'img/bnpparibas_logo.png',
    logoAlt: 'BNP Paribas Logo',
    linkTo: '/RIIF',
  },
  {
    title: t('home.projects_section.tptrm.title'),
    description: t('home.projects_section.tptrm.description'),
    logoSrc: 'img/bnpparibas_logo.png',
    logoAlt: 'BNP Paribas Logo',
    linkTo: '/TPTRM',
  },
  {
    title: t('home.projects_section.accidentology.title'),
    description: t('home.projects_section.accidentology.description'),
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Accidentology',
  },
  {
    title: t('home.projects_section.research.title'),
    description: t('home.projects_section.research.description'),
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Research',
  },
  {
    title: t('home.projects_section.facial_recognition.title'),
    description: t('home.projects_section.facial_recognition.description'),
    logoSrc: 'img/esiee_logo.png',
    logoAlt: 'Esiee Paris Logo',
    linkTo: '/Facial_Recognition',
  },
]);

const skillsCategories = computed(() => {
  const categories = messages.value[locale.value].about_me.skills_section.categories;
  return categories ? Object.entries(categories) : [];
});

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
          <h1 v-animate-on-scroll class="fade-in-up">{{ t('home.title') }}</h1>
          <div class="divider"></div>
          <p v-animate-on-scroll class="fade-in-up delay-1"><strong>{{ t('home.subtitle') }}</strong></p>
          <div class="divider"></div>
        </div>
<p v-animate-on-scroll class="fade-in-up delay-2 intro-text" v-html="t('home.intro_text')"></p>
      </div>
    </section>

    <section id="projects" class="projects-section">
      <h2 class="section-title">{{ t('home.projects_section.title') }}</h2>
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

    <section class="skills-section">
      <h2 class="skills-title fade-in-up" v-animate-on-scroll>
        {{ t('about_me.skills_section.title') }}
      </h2>
      <div class="skills-grid">
        <div
          v-for="([key, category], index) in skillsCategories"
          :key="key"
          class="skills-category-block fade-in-up"
          v-animate-on-scroll
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <h3 class="category-title">{{ category.category_title }}</h3>
          <div class="skill-items">
            <span
              v-for="([skillKey, skillName]) in Object.entries(category.skills)"
              :key="skillKey"
              class="skill-item"
              >{{ skillName }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <h2 class="section-title">{{ t('home.contact_section.title') }}</h2>
      <p v-animate-on-scroll class="contact-text fade-in-up">
        {{ t('home.contact_section.contact_text') }}
      </p>
      <div v-animate-on-scroll class="contact-links fade-in-up delay-1">
        <a href="https://www.linkedin.com/in/lucas-sali-orliange-65598a21a/" target="_blank" class="contact-link">{{ t('home.contact_section.linkedin') }}</a>
        <a href="https://github.com/Leukoss" target="_blank" class="contact-link">{{ t('home.contact_section.github') }}</a>
        <a href="mailto:lucas.saliorliange.pro@gmail.com" class="contact-link">{{ t('home.contact_section.email') }}</a>
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