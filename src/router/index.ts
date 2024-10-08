import EditCapsula from '@/views/edit/EditCapsula.vue';
import EditComprimido from '@/views/edit/EditComprimido.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '../../backend/auth';
import Bulas from '../views/Bulas.vue';
import Cadastro from '../views/Cadastro.vue';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';
import MainMenu from '../views/MainMenu.vue';
import RemedioInit from '../views/RemedioInit.vue';
import RemediosSelect from '../views/RemediosSelect.vue';
import ResetPassword from '../views/ResetPassword.vue';
import CapsulaConfig from '../views/capsula/CapsulaConfig.vue';
import CapsulaExtraConfig from '../views/capsula/CapsulaExtraConfig.vue';
import ComprimidoConfig from '../views/comprimido/ComprimidoConfig.vue';
import ComprimidoExtraConfig from '../views/comprimido/ComprimidoExtraConfig.vue';
import EditXarope from '../views/edit/EditXarope.vue';
import forgotPassword from '../views/forgotPassword.vue';
import XaropeConfig from '../views/xarope/XaropeConfig.vue';
import XaropeExtraConfig from '../views/xarope/XaropeExtraConfig.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: forgotPassword
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: ResetPassword
  },
  {
    path: '/menu',
    name: 'MainMenu',
    component: MainMenu,
    meta: { requiresAuth: true }
  },
    {
    path: '/bulas',
    name: 'Bulas',
    component: Bulas,
    meta: { requiresAuth: true }
  },
  {
    path: '/remedios',
    name: 'RemedioInit',
    component: RemedioInit,
    meta: { requiresAuth: true }
  },
  {
    path: '/remedioselect',
    name: 'RemediosSelect',
    component: RemediosSelect,
    meta: { requiresAuth: true }
  },
  {
    path: '/xaropeconfig',
    name: 'XaropeConfig',
    component: XaropeConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/xaropeextra',
    name: 'XaropeExtraConfig',
    component: XaropeExtraConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/editxarope/:id',
    name: 'EditXarope',
    component: EditXarope
  },
  {
    path: '/capsulaconfig',
    name: 'CapsulaConfig',
    component: CapsulaConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/capsulaextra',
    name: 'CapsulaExtraConfig',
    component: CapsulaExtraConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/editcapsula/:id',
    name: 'EditCapsula',
    component: EditCapsula
  },
  {
    path: '/comprimidoconfig',
    name: 'ComprimidoConfig',
    component: ComprimidoConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/comprimidoextra',
    name: 'ComprimidoExtraConfig',
    component: ComprimidoExtraConfig,
    meta: { requiresAuth: true }
  },
  {
    path: '/editcomprimido/:id',
    name: 'EditComprimido',
    component: EditComprimido
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router;
