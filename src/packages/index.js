import pagenation from './pagenation';
import message from './message';
import msgbox from './msgbox';
import nodata from './nodata';

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
};

export const Pagenation = pagenation;
export const Message = message;
export const Msgbox = msgbox;
export const Nodata = nodata;
export default install;
