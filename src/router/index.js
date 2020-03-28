import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Featured'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
 // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 {
   path: '/Featured',
   name: 'Featured',
   component:()=> import('../views/Featured.vue')
 },
 {
  path: '/HotSale',
  name: 'HotSale',
  component:()=> import('../views/HotSale.vue')
},
{
  path: '/SalesPromotion',
  name: 'SalesPromotion',
  component:()=> import('../views/SalesPromotion.vue')
},
 {
  path: '/About',
  name: 'About',
  component:()=> import('../views/About.vue')
},
{
  path: '/Contact',
  name: 'Contact',
  component:()=> import('../views/Contact.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
