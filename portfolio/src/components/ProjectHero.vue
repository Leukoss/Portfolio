<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
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
  <section class="project-hero">
    <div class="project-hero-content">
      <h1 v-animate-on-scroll class="fade-in-up">{{ title }}</h1>
      <div class="divider"></div>
      <p v-animate-on-scroll class="fade-in-up delay-1">
        <strong>{{ subtitle }}</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.project-hero {
  padding: 100px 50px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}
.project-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #373737;
  letter-spacing: -1.5px;
}
.project-hero-content p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
}
.divider {
  width: 50%;
  height: 2px;
  background-color: #cf9b64;
  margin: 10px auto;
  animation: drawLine 1s ease-in-out forwards;
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