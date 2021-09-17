import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
 routes : [
  {
    path: "/home",
    component: () => import("../views/home/Home"),
    name: "home",
  },
  {
    path: "/detail/:id",
    name: "detail",
    props: true,
    component: () => import("../views/detail/Detail"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("../views/cart/Cart"),
  },
  {
    path: "/",
    redirect: "/home",
  },
]});

