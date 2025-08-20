<script setup>

const props = defineProps({
  linkText: String,
  linkTo: String,
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
  <section class="project-outro">
    <div v-animate-on-scroll class="contact-links fade-in-up">
      <h2 class="section-title">Ready to build the next big thing?</h2>
      <a :href="linkTo" class="contact-link">{{ linkText }}</a>
    </div>
  </section>
</template>

<style scoped>
.project-outro {
  padding: 80px 50px;
  background: #fff;
  text-align: center;
}
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #373737;
}
.contact-link {
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #373737;
  text-decoration: none;
  padding: 10px 25px;
  border: 2px solid #cf9b64;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.contact-link:hover {
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