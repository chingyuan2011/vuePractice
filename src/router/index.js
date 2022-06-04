import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Practice",
    component: () => import("@/views/Practice"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
