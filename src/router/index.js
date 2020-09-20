import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'modal',
    component: Modal
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/Drawer.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "list" */ '../views/Cards.vue')
  },
  {
    path: '/simple',
    name: 'simple',
    component: () =>
      import(/* webpackChunkName: "simple" */ '../views/Simple.vue')
  },
  {
    path: '/stagger',
    name: 'stagger',
    component: () =>
      import(/* webpackChunkName: "stagger" */ '../views/Stagger.vue')
  },
  {
    path: '/state',
    name: 'state',
    component: () =>
      import(/* webpackChunkName: "state" */ '../views/State.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () =>
      import(/* webpackChunkName: "timeline" */ '../views/Timeline.vue')
  },
  {
    path: '/master',
    name: 'master',
    component: () =>
      import(/* webpackChunkName: "master" */ '../views/Master.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
