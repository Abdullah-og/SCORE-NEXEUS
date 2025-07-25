<template>
  <div class="signup-container">
    <div class="background-grid">
      <div v-for="i in 20" :key="i" class="grid-item">
        <img :src="getImagePath(i)" :alt="`Background image ${i}`" />
      </div>
    </div>

    <div class="overlay"></div>

    <div class="form-section">
      <SignupForm />
    </div>
  </div>
</template>

<script setup>
import SignupForm from "@/components/SignupForm.vue";

function getImagePath(index) {
  return new URL(`../assets/images/${index}.jpeg`, import.meta.url).href;
}
</script>

<style scoped>
.signup-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: 180px;
  grid-auto-flow: dense;
  gap: 8px;
  padding: 8px;
  z-index: -2;
}

.grid-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: #f0f0f0;
  transition: transform 0.3s ease;
}
.grid-item:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
.grid-item:nth-child(5n + 1) {
  grid-row: span 2;
}
.grid-item:nth-child(7n + 2) {
  grid-row: span 3;
}
.grid-item:nth-child(3n + 3) {
  grid-column: span 2;
}
.background-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 6px;
  transition: transform 0.5s ease;
}
.grid-item:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

.form-section {
  width: 100%;
  max-width: 420px;
  padding: 20px;
  z-index: 2;
}

@media (max-width: 768px) {
  .background-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: 120px;
    gap: 4px;
  }
}
</style>
