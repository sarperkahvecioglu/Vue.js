import { createRouter, createWebHashHistory } from 'vue-router';
import AllItems from './components/AllItems';
import DiscountItems from './components/DiscountItems';
import CommunicationVue from './components/CommunicationVue';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/products', component: AllItems },
        { path: '/products/:index', component: ProductPage, props: true },
         
        { path: '/discount-items', component: DiscountItems },
        { path: '/communication', component: CommunicationVue },
        { path: '/cart', component: CartPage },

    ],
})

export default router;