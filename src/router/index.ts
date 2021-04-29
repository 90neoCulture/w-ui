import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import comps from './comp';

const Entry = () => import('../views/Entry/index.vue');
const Demos = () => import('../demos/count_vuex.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/button',
  },
  {
    path: '/demos',
    name: 'demos',
    component: Demos,
  },
  {
    path: '/entry',
    name: 'entry',
    component: Entry,
    children: comps,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
