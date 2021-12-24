import { createRouter, createWebHistory } from "vue-router";
import GeneralData from "../screens/GeneralData.vue";
import NewbornR from "../screens/NewbornR.vue";

const routes = [
  {
    path: "/",
    name: "GeneralData",
    component: GeneralData,
  },
  {
    path: "/registro",
    name: "NewbornR",
    component: NewbornR,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
