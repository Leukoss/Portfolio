<template>
  <div v-animate-on-scroll :class="['impact-item', 'fade-in-up', `delay-${impact.delay}`]">
    <h3 class="impact-title">{{ impact.title }}</h3>
    <p class="impact-description">
      <span v-html="impact.description"></span>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

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

defineProps({
  impact: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.impact-item {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}
.impact-item:hover {
  transform: translateY(-10px);
}
.impact-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #cf9b64;
  margin-bottom: 15px;
}
.impact-description {
  font-size: 1rem;
  line-height: 1.6;
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
.delay-2 {
  transition-delay: 0.4s;
}
</style>