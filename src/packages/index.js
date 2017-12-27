import pagenation from './Pagenation';
import message from './Message';

const components = [
  pagenation
];

const install = Vue => {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = message;
};

export const Pagenation = pagenation;
export const Message = message;
export default install;
