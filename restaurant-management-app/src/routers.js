import HomeNew from "./components/HomeNew.vue";
import SignUp from "./components/SignUp.vue";
import LoginNew from "./components/LoginNew.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import EditRestaurant from "./components/EditRestaurant.vue";


import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {name: "Home", component: HomeNew, path: "/"},
    {name: "SignUp", component: SignUp, path: "/sign-up"},
    {name: "Login", component: LoginNew, path: "/login"},
    {name: "AddRestaurant", component: AddRestaurant, path: "/add-restaurant"},
    {name: "EditRestaurant", component: EditRestaurant, path: "/edit-restaurant/:id", props: true},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;