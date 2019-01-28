// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/reset.css';
import Vue from 'vue';

import VueRouter from 'vue-router';
import App from './App';
import routes from './router';

// store为实例化生成的
import store from './store';

import Config from './config/index';

import Sto from 'store';

Vue.use(VueRouter);

import { Message, loading } from 'element-ui';

Vue.prototype.$loading = loading;
Vue.prototype.$message = Message;
Vue.prototype.$sto = Sto;
Vue.prototype.$conf = Config;

Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  strict: process.env.NODE_ENV === 'development' // 生产环境使用严格模式
})

router.beforeEach((to, from, next) => {
    next();
})

router.afterEach((transition) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
