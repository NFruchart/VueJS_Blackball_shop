import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "../views/TheHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/TheContact.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/TheCart.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/Products.vue")
  },
  {
    path: "/admin/product-add",
    name: "admin-product-add",
    component: () => import("../views/admin/ProductAdd.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
