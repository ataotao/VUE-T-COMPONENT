import PageLoading from './pageLoading.vue';
import Vue from 'vue';

var newInstance;

PageLoading.newInstance = properties => {
  const _props = properties || {};
  const Instance = new Vue({
    render(h) {
      return h(PageLoading, {
        props: _props
      });
    }
  });

  // 使用 vm.$mount() 手动地挂载一个未挂载的实例
  const component = Instance.$mount();
  document.body.appendChild(Instance.$el);

  // 用于手动清理该组件
  return {
    component: component,
    close() {
      // 销毁组件
      component.$destroy(true);
      document.body.removeChild(newInstance.component.$el);
      newInstance = null;
    }
  };
};

export default {
  open() {
    newInstance = newInstance || PageLoading.newInstance();
    return newInstance;
  },
  close() {
    newInstance && newInstance.close();
  }
};
