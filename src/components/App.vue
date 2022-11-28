<template>
  <div id="appWrapper">
    <AppHeader />
    <AppContent />
  </div>
</template>

<script setup lang="ts">
import AppContent from './organisms/AppContent.vue'
import AppHeader from './organisms/AppHeader.vue'
</script>

<style>
html,
body,
#app {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

ul {
  list-style: disc;
  padding-left: 25px;
}
</style>
