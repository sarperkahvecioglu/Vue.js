import { createRouter, createWebHashHistory } from "vue-router";
import MyWebsite from "./components/MyWebsite";
import ProductsAll from "./components/ProductsAll";
import CartPage from "./components/CartPage";
import ProductViewer from "./components/ProductViewer";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/my-website", component: MyWebsite },
    { path: "/products", component: ProductsAll },

    { path: "/products/:index", component: ProductViewer, props: true },

    { path: "/cart", component: CartPage },
  ],
});

export default router;





