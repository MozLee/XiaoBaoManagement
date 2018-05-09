// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

//导入路由配置
import router from '@/router'

//TODO:最后不要忘记按需求加载字体图标
//导入ico
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon);
//转场动画
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
Vue.use(vueg, router)
//loading
import  { LoadingPlugin,AlertPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)

FastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */

import store from '@/store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
