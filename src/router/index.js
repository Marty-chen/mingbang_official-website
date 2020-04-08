import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
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
},
{
  path: '/Product_detail',
  name: 'Product_detail',
  component:()=> import('../views/Product_detail.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
