<script setup>

import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

const props = defineProps({
  categories: Array,
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
  <div v-animate-on-scroll class="project-tech-stack fade-in-up delay-1">
    <h3 class="category-title">{{ messages[locale].skills_section_title }}</h3>
    <div v-for="category in categories" :key="category.id" class="skills-category-group">
      <h4 class="category-subtitle">{{ category.title }}</h4>
      <div class="skills-grid">
        <div v-for="skill in category.skills" :key="skill" class="skill-item">
          <span class="skill-name">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-tech-stack {
  display: flex;
  flex-direction: column;
}
.category-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #373737;
  margin-bottom: 20px;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.skill-item {
  position: relative;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  z-index: 1;
}
.skill-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(to right, #cf9b64 100%, transparent 100%) no-repeat left top / 0 2px,
    linear-gradient(to right, #cf9b64 100%, transparent 100%) no-repeat left bottom / 0 2px,
    linear-gradient(to bottom, #cf9b64 100%, transparent 100%) no-repeat right top / 2px 0,
    linear-gradient(to bottom, #cf9b64 100%, transparent 100%) no-repeat left top / 2px 0;
  background-size: 0 2px, 0 2px, 2px 0, 2px 0;
  transition: background-size 0.5s ease-in-out;
}
.skill-item:hover::before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}
.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
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
</style>