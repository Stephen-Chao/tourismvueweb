import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Attractions from '@/components/Attractions'
import Orders from '@/components/Orders'
import GoogleMap from '@/components/GoogleMap'
import Register from '@/components/Register'
import Contact from '@/components/Contact'
import LoginWithEmail from '@/components/LoginWithEmail'
import Addattraction from '@/components/Addattraction'
import Addorder from '@/components/Addorder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/attractions',
      name: 'Attractions',
      component: Attractions
    },
    {
      path: '/order',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/loginwithemail',
      name: 'LoginWithEmail',
      component: LoginWithEmail
    },
    {
      path: '/addattraction',
      name: 'Addattraction',
      component: Addattraction
    },
    {
      path: '/addorder',
      name: 'Addorder',
      component: Addorder
    }
  ]
})
