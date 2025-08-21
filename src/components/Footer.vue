<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <p class="copyright-text">© {{ currentYear }} Lucas SALI-ORLIANGE. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: transparent;
  color: #a0a0a0;
  padding: 1rem 2rem;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.footer-container {
  max-width: none;
  margin: 0;
}

.copyright-text {
  font-size: 0.8rem;
  margin: 0;
}
</style>