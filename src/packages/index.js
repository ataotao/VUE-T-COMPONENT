import pagenation from './pagenation';
import message from './message';
import msgbox from './msgbox';
import nodata from './nodata';
import pageloading from './pageloading';

const components = [
  pagenation,
  nodata
];

const install = Vue => {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = message;
  Vue.prototype.$msgbox = msgbox;
  Vue.prototype.$pageloading = pageloading;
};

export const Pagenation = pagenation;
export const Message = message;
export const Msgbox = msgbox;
export const Nodata = nodata;
export const Pageloading = pageloading;
export default install;
