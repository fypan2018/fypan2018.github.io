import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/views/team',
    name: 'TeamMembers',
    component: () => import('../views/TeamMembers.vue'),
  },
  {
    path: '/views/research',
    name: 'Research',
    component: () => import('../views/Research.vue'),
  },
  {
    path: '/views/teaching',
    name: 'Teaching',
    component: () => import('../views/Teaching.vue'),
  },
  {
    path: '/views/awards',
    name: 'Awards',
    component: () => import('../views/Awards.vue'),
  },
  {
    path: '/views/cv',
    name: 'CV',
    component: () => import('../views/CV.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;