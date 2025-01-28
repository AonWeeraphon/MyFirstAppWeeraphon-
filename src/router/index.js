import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../Pages/MemoriesPage.vue'
import AddMemoriesPage from '../Pages/AddMemoriesPage.vue';

const routes= [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/addmemories',
    component: AddMemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import ('../Pages/MemoriesDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import ('../Pages/AddMemoriesPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
routes,
});
export default router;
