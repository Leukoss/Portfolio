<script setup>
import { ref, watch } from 'vue';

const isExpanded = ref(false);
const emit = defineEmits(['update-width']);

const toggleMenu = (expandedState) => {
  isExpanded.value = expandedState;
};

// Watch for changes in isExpanded and emit a custom event
watch(isExpanded, (newVal) => {
  const newWidth = newVal ? '200px' : '60px';
  emit('update-width', newWidth);
});
</script>

<template>
  <aside
    :class="['side-menu-wrapper', { 'is-expanded': isExpanded }]"
    @mouseenter="toggleMenu(true)"
    @mouseleave="toggleMenu(false)"
  >
    <div class="menu-top-section">
      <div class="nav-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
    <ul class="side-menu-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/RIIF">RIIF</router-link>
      </li>
      <li>
        <router-link to="/TPTRM">TPTRM</router-link>
      </li>
      <li>
        <router-link to="/Research">Research</router-link>
      </li>
      <li>
        <router-link to="/Accidentology">Accidentology</router-link>
      </li>
      <li>
        <router-link to="/Facial_Recognition">Facial Recognition</router-link>
      </li>
      <li class="divider-item">
        <div class="divider"></div>
      </li>
      <li>
        <router-link to="/About_Me">About Me</router-link>
      </li>
    </ul>
    <div class="menu-bottom-section">
      <ul class="social-links-list">
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-sali-orliange-65598a21a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/Leukoss" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.side-menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: #373737;
  color: white;
  transition: width 0.3s ease-in-out;
  overflow-x: hidden;
  z-index: 100;
  border-right: 1px solid #cf9b64;
}
.side-menu-wrapper.is-expanded {
  width: 200px;
}
.menu-top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 1rem;
  background-color: #373737;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.side-menu-wrapper.is-expanded .menu-top-section {
  justify-content: flex-start;
  gap: 1.5rem;
}
.nav-button {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.7rem;
  border-radius: 50%;
}
.nav-button:hover {
  background-color: rgba(207, 155, 100, 0.2);
}
.bar {
  width: 25px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  border-radius: 1.5px;
  transition: all 0.3s ease;
}
.side-menu-links {
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
.side-menu-wrapper.is-expanded .side-menu-links {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.2s;
}
.side-menu-links li {
  transition: background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out;
}
.side-menu-links li:hover {
  background-color: rgba(207, 155, 100, 0.2);
  border-radius: 5px;
}
.side-menu-links a {
  display: block;
  padding: 1rem 1.5rem;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
}
.side-menu-links a:hover {
  color: #cf9b64;
}
.menu-bottom-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  display: flex;
  justify-content: center;
}
.side-menu-wrapper.is-expanded .menu-bottom-section {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.2s;
}
.social-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
}
.social-links-list a {
  text-decoration: none;
  color: #cf9b64;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: color 0.3s ease;
  font-weight: bold;
}
.social-links-list a:hover {
  color: #fff;
}
.divider-item {
  padding: 0.5rem 1rem;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-out;
}
.side-menu-wrapper.is-expanded .divider-item {
  opacity: 1; /* Fade in when expanded */
  transition: opacity 0.3s ease-in 0.2s;
}
.divider {
  height: 1px;
  background-color: #cf9b64; /* Use your accent color for the divider */
  margin: 0;
}
</style>