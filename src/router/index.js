import Vue from 'vue'
import Router from 'vue-router'
//导入Login模板
import Login from '@/components/Login'
//导入Manage模板
import Manage from '@/components/Manage'
//导入Manage模板
import Users from '@/components/Users.vue'
import Tools from '@/components/Tools.vue'
import Admin from '@/components/Admin.vue'
import UserInfo from '@/components/UserInfo.vue'
//
import store from '@/store'
Vue.use(Router)

let route = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path:'/userinfo/:id',
      component:UserInfo
    },
    {
      path:'/manage',
      name:'Manange',
      component:Manage,
      redirect:{
        name:'Users'
      },
      children:[{
        path:'users',
        name:'Users',
        component:Users
      }
      ,{
        path:'tools',
        name:'Tools',
        component:Tools
      },{
        path:'admin',
        name:'Admin',
        component:Admin
      }]
    }
  ]
})
route.beforeEach((to,from,next) => {
  if(to.path=='/'){
    next()
  }else{
    if(store.state.isLogin){
      next()
    }else{
      next({
        name:'Login'
      })
    }
  }
})
export default route;