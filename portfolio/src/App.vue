<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const sidebarWidth = ref('60px');

const updateContentMargin = (newWidth) => {
  sidebarWidth.value = newWidth;
};
</script>

<template>
  <div id="app-container">
    <Navbar @update-width="updateContentMargin" />

    <header
      class="page-header"
      :style="{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth})` }"
    >
      <h1 class="header-name">Lucas SALI--ORLIANGE</h1>
    </header>
    
    <main class="main-content-wrapper" :style="{ 'margin-left': sidebarWidth, width: `calc(100% - ${sidebarWidth})` }">
      <RouterView />
    </main>

    <Footer :style="{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth})` }" />
  </div>
</template>

<style>
/* Global styles */
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
}

.header-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
</style>