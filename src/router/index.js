import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ProductsPage from "../views/ProductsView.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
  },
  {
    path: "/admin",
    name: "adminPage",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
