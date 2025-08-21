<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logoSrc: {
    type: String,
    required: true,
  },
  logoAlt: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
});

const cardClass = computed(() => {
  return `fade-in-up${props.delay ? ` delay-${props.delay}` : ''}`;
});
</script>

<template>
  <div class="project-card" :class="cardClass">
    <img :src="logoSrc" :alt="logoAlt" class="project-logo" />
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-description" v-html="description"></p>
    <div class="project-link">
      <router-link :to="linkTo" class="link-button">{{ messages[locale].project_card }}</router-link>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.project-logo {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: auto;
}

.project-title {
  font-size: 1.5rem;
  color: #373737;
  margin-bottom: 10px;
}

.project-description {
  color: #777;
  font-size: 1rem;
}

.link-button {
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #373737;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 1;
}

.link-button:hover {
  color: #cf9b64;
}

.link-button::before {
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
  transition: background-size 0.8s ease-in-out;
}

.link-button:hover::before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}
</style>