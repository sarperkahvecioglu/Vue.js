// import { createApp } from 'vue'
// import App from './App.vue'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import $bus from './utils/Events'
// import router from './routes';
// import $pages from './data';

// const app = createApp(App)

// app.use(router);
// app.config.globalProperties.$bus = $bus;

// app.config.globalProperties.$pages = $pages;

// app.mount('#app');


// main.js

import { createApp } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';

const app = createApp(App);

// Define $pages as a global property
// app.config.globalProperties.$pages = $pages;
// app.config.globalProperties.$bus = $bus;
app.provide('$pages', $pages)
app.provide('$bus', $bus)

app.use(router);



app.mount('#app');

