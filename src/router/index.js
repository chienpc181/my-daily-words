import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MyWord from "../views/MyWord.vue";
import AddWord from "../views/AddingPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/myword/:word",
    name: "MyWord",
    component: MyWord,
  },
  {
    path: "/addword",
    name: "AddWord",
    component: AddWord,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
