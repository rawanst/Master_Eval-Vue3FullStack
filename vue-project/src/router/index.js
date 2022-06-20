import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Inscription from "../views/Inscription.vue";
import Connexion from "../views/Connexion.vue";
import TodoList from "../views/TodoList.vue";
import Deconnexion from "../views/Deconnexion.vue";
import Hasard from "../views/Hasard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/inscription",
      name: "inscription",
      component: Inscription,
    },
    {
      path: "/connexion",
      name: "connexion",
      component: Connexion,
    },
    {
      path: "/deconnexion",
      name: "deconnexion",
      component: Deconnexion,
    },
    {
      path: "/todolist",
      name: "todolist",
      component: TodoList,
    },
    {
      path: "/hasard",
      name: "hasard",
      component: Hasard,
    },
  ],
});

export default router;
