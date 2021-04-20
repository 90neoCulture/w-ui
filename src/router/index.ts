import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Entry = () => import('../views/Entry/index.vue');
const Button = () => import('../examples/Button');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/entry'
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
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
