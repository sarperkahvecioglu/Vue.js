import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/HomePage";
import AllGames from "./components/AllGames";
import FixtureAll from "./components/FixtureAll";
import AboutUs from "./components/AboutUs";
import PlayedGame from "./components/PlayedGame";

const routes = [
  { path: "/home", component: HomePage },
  { path: "/played-games", component: AllGames },
  {
    path: "/game/:index",
    component: PlayedGame,
    props: true,
  },
  { path: "/fixture", component: FixtureAll },
  { path: "/about-us", component: AboutUs },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
