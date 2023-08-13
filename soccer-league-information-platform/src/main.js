import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import $games from './data';

const app = createApp(App)

app.use(router);
app.provide('$games', $games);


app.mount('#app')
