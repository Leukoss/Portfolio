<script setup>
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
  <div v-animate-on-scroll class="project-intro fade-in-up">
    <slot></slot>
  </div>
</template>

<style scoped>
.project-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
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
</style>