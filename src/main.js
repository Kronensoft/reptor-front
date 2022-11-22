import { createApp } from 'vue'
import App from './App.vue'
import DataSources from './features/data-sources/DataSources.vue';

const routes = [
  { path: '/globalDataSources', component: DataSources },
  { path: '/about', component: About },
];

const app = createApp(App);
app.mount('#app');
