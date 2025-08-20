<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const { locale } = useI18n();

const sidebarWidth = ref('60px');

const updateContentMargin = (newWidth) => {
  sidebarWidth.value = newWidth;
};

const nextLocale = computed(() => {
  return locale.value === 'en' ? 'fr' : 'en';
});

const switchLanguage = () => {
  locale.value = nextLocale.value;
};
</script>

<template>
  <div id="app-container">
    <Navbar @update-width="updateContentMargin" />

    <header
      class="page-header"
      :style="{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth})` }"
    >
      <div class="header-spacer"></div>

      <h1 class="header-name">Lucas SALI--ORLIANGE</h1>
      <button @click="switchLanguage" class="language-switcher-button">
        <Transition name="locale-fade" mode="out-in">
          <span :key="locale">
            {{ locale.toUpperCase() }}
          </span>
        </Transition>
      </button>
    </header>
    
    <main class="main-content-wrapper" :style="{ 'margin-left': sidebarWidth, width: `calc(100% - ${sidebarWidth})` }">
      <RouterView />
    </main>

    <Footer :style="{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth})` }" />
  </div>
</template>

<style>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content-wrapper {
  flex-grow: 1;
  transition: margin-left 0.3s ease, width 0.3s ease;
}
.page-header {
  position: fixed;
  top: 0;
  height: 60px;
  color: #373737;
  background-color: white;
  z-index: 98;
  display: flex;
  justify-content: center;
  align-items: center; 
  transition: width 0.3s ease, left 0.3s ease;
  border-bottom: 2px solid #CF9B64;
  padding: 0 20px;
}
.header-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
.language-switcher-button {
  position: relative;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  padding: 10px 20px;
  background-color: #373737;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 1;
  margin-left: auto;
  min-width: 60px;
  height: 44px;
}
.header-spacer {
  width: 780px;
}
.language-switcher-button:hover {
  color: #cf9b64;
}
.language-switcher-button::before {
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
  transition: background-size 0.3s ease-in-out;
}
.language-switcher-button:hover::before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}
.locale-fade-enter-active,
.locale-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.locale-fade-enter-from,
.locale-fade-leave-to {
  opacity: 0;
}
</style>