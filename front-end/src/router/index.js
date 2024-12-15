import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import AddPostView from "../views/AddPostView.vue";
import APostView from "../views/APostView.vue";
import auth from "../auth";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/SignUp",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/Login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/AddPost",
    name: "addpost",
    component: AddPostView,
  },
  {
    path: "/APost",
    name: "apost",
    component: APostView,
  },
  {
    path: "/APost/:id",
    name: "apost-detail",
    component: APostView,
    props: true,
  },
  /*
  {
    path: "/ContactUs",
    name: "contactus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" * / "../views/ContactUsView.vue"),
  },
  */
  {
    path: "/ContactUs",
    name: "contactus",
    component: ContactUsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
