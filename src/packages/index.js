import pagenation from './pagenation';
import message from './message';
import msgbox from './msgbox';
import nodata from './nodata';
import pageloading from './pageloading';
import loading from './loading';
import modal from './modal';

const components = [
  pagenation,
  nodata,
  modal
];

const install = Vue => {
  if (install.installed) return;

  // 全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // 实例方法
  Vue.prototype.$message = message;
  Vue.prototype.$msgbox = msgbox;
  Vue.prototype.$pageloading = pageloading;
  // 全局指令
  Vue.use(loading);
};

export const Pagenation = pagenation;
export const Message = message;
export const Msgbox = msgbox;
export const Nodata = nodata;
export const Pageloading = pageloading;
export const Loading = loading;
export const Modal = modal;
export default install;
