<template>
  <aside>
    <div id="sidebar__title">
      <h1>Reptor</h1>
      <h2>Web Reporting Engine</h2>
    </div>
    <div id="sidebar__user_info">
      <div>
        <!-- <img /> -->
      </div>
      <div>
        <span></span>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#globalDataSources">Global Data Sources</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#configuration">Configuration</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
</script>

<style scoped>
aside {
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  color: #fafafa;
  background-color: #3498DB;
}

aside #sidebar__title {
  padding-left: 1em;
}

nav ul {
  list-style-type: none;
  padding-left: 0;
}

nav ul li {
  background-color: #2c7baf;
  border: 1px solid #19476633;
}

nav ul a {
  display: block;
  line-height: 2.5em;
  padding-left: 1em;
  height: 100%;
  color: #fafafa;
  text-decoration: none;
}
</style>
