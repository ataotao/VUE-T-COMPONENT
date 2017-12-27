import Pagenation from './src/pagenation.vue';

Pagenation.install = Vue => {
  Vue.component(Pagenation.name, Pagenation);
};

export default Pagenation;
