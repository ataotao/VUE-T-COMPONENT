import Vue from 'vue';
import Loading from './loading.vue';
const Mask = Vue.extend(Loading);

const initLoading = function(el, binding) {
  if (binding.value === false && (binding.oldValue && binding.oldValue !== binding.value)) {
    el.style.position = '';
    el.removeChild(el.mask);
  }

  if (binding.value === true && binding.oldValue !== binding.value) {
    el.style.position = 'relative';
    el.appendChild(el.mask);
  }
};

export default {
  install(Vue) {
    Vue.directive('t-loading', {
      bind(el, binding, vnode, oldVnode) {
        let text = el.getAttribute('text');
        let background = el.getAttribute('background');
        let color = el.getAttribute('color');
        let vm = vnode.context;
        let mask = new Mask({
          el: document.createElement('div'),
          data: {
            text: (vm && text) || 'loading...',
            background: (vm && background) || 'rgba(255, 255, 255, 0.9)',
            color: (vm && color) || '#666'
          }
        });
        el.instance = mask;
        el.mask = mask.$el;
        initLoading(el, binding);
      },
      update(el, binding, vnode, oldVnode) {
        initLoading(el, binding);
      },
      unbind(el, binding, vnode, oldVnode) {
        el.mask &&
        el.mask.parentNode &&
        el.mask.parentNode.removeChild(el.mask);
        // 销毁组件
        el.instance.$destroy(true);
        el.mask = null;
        el.instance = null;
      }
    });
  }
};
