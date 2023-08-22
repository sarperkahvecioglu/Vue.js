import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js';
import $products from './data.js';
import $cart from './cart.js'

const app = createApp(App)

app.use(router);
app.provide('$products', $products);
app.provide('$cart', $cart);

app.mount('#app')
