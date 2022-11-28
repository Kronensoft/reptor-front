<template>
  <div id="appWrapper">
    <Header />
    <Content />
  </div>
</template>

<script setup>
import Content from './components/organisms/Content.vue'
import Header from './components/organisms/Header.vue'

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
