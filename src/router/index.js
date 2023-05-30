import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = ()=>import('../views/home/home.vue')
const profile = ()=>import('../views/profile/profile.vue')

//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/profile',
    component:profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
