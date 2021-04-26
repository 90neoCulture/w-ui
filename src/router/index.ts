import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Entry = () => import('../views/Entry/index.vue');
const Button = () => import('../examples/Button/index.vue');
const Cell = () => import('../examples/Cell/index.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/button',
  },
  {
    path: '/entry',
    name: 'entry',
    component: Entry,
    children: [
      {
        path: '/button',
        name: 'button',
        component: Button,
      },
      {
        path: '/cell',
        name: 'cell',
        component: Cell,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
