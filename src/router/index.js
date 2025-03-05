import { createRouter, createWebHistory } from 'vue-router';
// import adminRoutes from './admin';
import userRoutes from './users';

const routes = [/*...adminRoutes,*/ ...userRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
