<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright-text">&copy; {{ currentYear }} Lucas SALI--ORLIANGE. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: transparent; 
  color: #a0a0a0;
  padding: 1rem 2rem; 
  text-align: left;
  border-top: 1px solid #e0e0e0; 
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  transition: width 0.3s ease, left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: width 0.3s ease, left 0.3s ease;
}

.container {
  max-width: none;
  margin: 0;
}

.copyright-text {
  font-size: 0.8rem;
  margin: 0;
}
</style>