import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CreateView from "../views/CreateView.vue";
import ProfileView from "../views/ProfileView.vue";
import CandidatureView from "../views/form_desktop/CandidatureView.vue";
import CoverletterView from "../views/form_desktop/CoverletterView.vue";
import AnnonceView from "../views/form_desktop/AnnonceView.vue";
import AllAnnoncesView from "@/views/AllAnnoncesView.vue";
import CoverletterVisualVue from "@/views/CoverletterVisualVue.vue";
import DashboardView from "@/views/DashboardView.vue";
import CandidatureVisualVue from "@/views/CandidatureVisualVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/Candidature",
      name: "Candidature",
      component: CandidatureView,
    },
    {
      path: "/CoverletterVisual",
      name: "CoverletterVisual",
      component: CoverletterVisualVue,
    },
    {
      path: "/CandidatureVisual",
      name: "CandidatureVisual",
      component: CandidatureVisualVue,
    },
    {
      path: "/Annonce",
      name: "Annonce",
      component: AnnonceView,
    },
    {
      path: "/AllAnnonces",
      name: "allAnnonces",
      component: AllAnnoncesView,
    },
    {
      path: "/Coverletter",
      name: "Coverletter",
      component: CoverletterView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
