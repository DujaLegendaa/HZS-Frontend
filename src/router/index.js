import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import CreateEvent from "../views/CreateEvent.vue";
import EventList from "../views/EventList.vue";
import Event from "../views/Event.vue";
import Profile from "../views/Profile.vue";
import Codes from "../views/Codes.vue";
import ActivateCode from "../views/ActivateCode.vue";
import Companies from "../views/Companies.vue";
import UserList from "../views/UserList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/CreateEvent",
    name: "CreateEvent",
    component: CreateEvent,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "Event",
    component: Event,
  },
  {
    path: "/events/:id/users",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/events/:id/codes",
    name: "Codes",
    component: Codes,
  },
  {
    path: "/codes/:id/activate",
    name: "ActivateCode",
    component: ActivateCode,
  },
  {
    path: "/companies",
    name: "Companies",
    component: Companies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
