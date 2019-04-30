import Vue from 'vue'
import Router from 'vue-router'
import LoginView from './views/LoginView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/LoginView'
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: () => import('./views/RegisterView.vue')
    },
    {
      path: '/FooterNav',
      name: 'FooterNav',
      component: () => import('./components/FooterNav.vue'),
      redirect: '/FooterNav/HomeView',
      children: [
        {
          path: 'HomeView',
          name: 'HomeView',
          component: () => import('./views/HomeView.vue')
        },
        {
          path: 'ClassifyView',
          name: 'ClassifyView',
          component: () => import('./views/ClassifyView.vue')
        },
        {
          path: 'SearchView',
          name: 'SearchView',
          component: () => import('./views/SearchView.vue')
        },
        {
          path: 'CartView',
          name: 'CartView',
          meta: {
            requireAuth: true  
          },
          component: () => import('./views/CartView.vue')
        },
        {
          path: 'MineView',
          name: 'MineView',
          meta: {
            requireAuth: true
          },
          component: () => import('./views/MineView.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
});
