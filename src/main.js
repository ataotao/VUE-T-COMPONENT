// 组件需要配合bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 安装组件
import tComponents from '@/packages/index';
Vue.use(tComponents);

// 局部安装
// import { Pagenation } from '@/packages/index';
// Vue.use(Pagenation);
// import { Loading } from '@/packages/index';
// Vue.use(Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
