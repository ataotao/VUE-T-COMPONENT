import pagenation from '@/components/Pagenation';
import message from '@/components/Message';

const components = [
  pagenation,
  message
];

const install = Vue => {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export const Pagenation = pagenation;
export const Message = message;
export default install;
