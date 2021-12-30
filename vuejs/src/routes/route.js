import { createRouter, createWebHistory } from "vue-router";
import GeneralData from "../screens/GeneralData.vue";
import NewbornR from "../screens/NewbornR.vue";
import ParentsR from "../screens/ParentsR.vue";
import GrandparentsR from "../screens/GrandparentsR.vue";

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
  {
    path: "/padres",
    name: "ParentsR",
    component: ParentsR,
  },
  {
    path: "/abuelos",
    name: "GrandparentsR",
    component: GrandparentsR,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
