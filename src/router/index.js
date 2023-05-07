import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CouresView from "../views/CouresView.vue";
import RulesView from "../views/RulesView.vue";
import AboutView from "../views/AboutView.vue";
import JoinUs from "../views/JoinUs.vue";
import FrontEndpage from "../views/Front-End.vue";
import NotFound from "../views/notfound.vue"
import Details from "../views/Details.vue"


const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  
  {
    path: "/coures/:name",
    name: "Details",
    component: Details,
    props:true,
  },
  {
    path: "/coures",
    name: "Coures",
    component: CouresView,
  },
  {
    path: "/rules",
    name: "Rules",
    component: RulesView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/join",
    name: "JoinUs",
    component: JoinUs,
  },
  {
    path: "/front",
    name: "FrontEnd",
    component: FrontEndpage,
  },
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
