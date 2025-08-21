<script setup>
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
  <section id="contact" class="contact-section">
    <h2 class="section-title">{{ messages[locale].home.contact_section.title }}</h2>
    <p v-animate-on-scroll class="contact-text fade-in-up">
      {{ messages[locale].home.contact_section.contact_text }}
    </p>
    <div v-animate-on-scroll class="contact-links fade-in-up delay-1">
      <a href="https://www.linkedin.com/in/lucas-sali-orliange-65598a21a/" target="_blank" class="contact-link">{{ messages[locale].home.contact_section.linkedin }}</a>
      <a href="https://github.com/Leukoss" target="_blank" class="contact-link">{{ messages[locale].home.contact_section.github }}</a>
      <a href="mailto:lucas.saliorliange.pro@gmail.com" class="contact-link">{{ messages[locale].home.contact_section.email }}</a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: #fff;
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
</style>