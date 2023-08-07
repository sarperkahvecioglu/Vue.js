import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import $products from './data';

const app = createApp(App)

app.provide('$products', $products);
app.use(router);

if(!localStorage.getItem('cart-items')){
    localStorage.setItem('cart-items', JSON.stringify([]));
}



app.mount('#app')
