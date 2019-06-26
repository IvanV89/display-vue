import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase/app';
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue";
import Blog from "./views/Blog.vue";
import NotFound from "./views/NotFound.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import BlogPost from "./views/BlogPost.vue";
import SinglePost from "./views/SinglePost.vue";
import EditPost from "./views/EditPost.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/work",
      name: "Work",
      component: Work
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/blogpost",
      name: "BlogPost",
      component: BlogPost
    },
    {
      path: "/singlepost/:id",
      name: "SinglePost",
      component: SinglePost
    },
    {
      path: "/editpost/:id",
      name: "EditPost",
      component: EditPost
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;