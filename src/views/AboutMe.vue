<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

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

const timelineData = computed(() => {
  const items = messages.value[locale.value].about_me.timeline_section.items;
  return items ? Object.values(items) : [];
});

const skillsCategories = computed(() => {
  const categories = messages.value[locale.value].about_me.skills_section.categories;
  return categories ? Object.entries(categories) : [];
});
</script>

<template>
  <div class="about-page-container">
    <section class="intro-section">
      <div class="intro-content fade-in-up" v-animate-on-scroll>
        <h1 class="intro-title">{{ messages[locale].about_me.intro_section.title }}</h1>
        <div class="intro-divider"></div>
        <p class="intro-text" v-html="messages[locale].about_me.intro_section.paragraphs.p1"></p>
        <p class="intro-text" v-html="messages[locale].about_me.intro_section.paragraphs.p2"></p>
      </div>
    </section>

    <section class="timeline-section">
      <h2 class="timeline-title fade-in-up" v-animate-on-scroll>
        {{ messages[locale].about_me.timeline_section.title }}
      </h2>
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
            <p class="timeline-company">{{ item.company }}</p>
            <p class="timeline-description" v-html="item.description"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="skills-title fade-in-up" v-animate-on-scroll>
        {{ messages[locale].about_me.skills_section.title }}
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