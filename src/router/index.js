import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue")
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
