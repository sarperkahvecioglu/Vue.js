import { createRouter, createWebHashHistory } from "vue-router";
import LoginNew from "./components/LoginNew";
import SignUp from "./components/SignUp";
import HomeNew from "./components/HomeNew";
import ProfileNew from "./components/ProfileNew";
import EditPost from "./components/EditPost";


const routes = [
    {name: "SignUp", component: SignUp, path: "/sign-up"},
    {name: "Login", component: LoginNew, path: "/login"},
    {name: "Home", component: HomeNew, path: "/"},
    {name: "Profile", component: ProfileNew, path: "/profile"},
    {name: "EditPost", component: EditPost, path: "/edit-post/:id", props: true}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;