import Main from './msgbox.vue';
import Vue from 'vue';

let MsgboxConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;

/**
 * title: 标题
 * msg: 内容 （必填项）
 * showCloseBtn: 是否显示关闭按钮
 * showConfirmBtn: 是否显示确定按钮
 * showCancelBtn: 是否显示取消按钮
 * confirmBtnText: 确定按钮文字
 * cancelBtnText: 取消按钮文字
 * closeOnBackdrop: 点击遮罩是否关闭
 * isHtml: 是否为html标签
 * isTitle: 是否有标题
 * onConfirm: 确定后回调函数
 * onCancel： 关闭后回调函数
 */
const Msgbox = function(options = {}) {
  instance = new MsgboxConstructor({
    el: document.createElement('div')
  });

  // 赋值参数
  if (typeof options === 'string') {
    options = {
      msg: options
    };
  }

  if (options === Object(options)) {
    for (const key in options) {
      instance.$props[key] = options[key] === undefined ? instance.$props[key] : options[key];
    }
  }

  let id = 't_msgbox_' + seed++;

  instance.id = id;

  let component = instance.$mount();
  document.body.appendChild(component.$el);

  Vue.nextTick(() => {
    component.visible = true;
  });

  component.handleClick = event => {
    let elName = event.target.dataset.name;
    if (elName) {
      if (elName === 'backdrop' && !instance.$props['closeOnBackdrop']) return;
      Msgbox.close(id, elName === 'confirm' ? options.onConfirm : options.onCancel);
    }
  };

  instances.push(instance);
};

Msgbox.close = (id, closeCallback) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    let instance = instances[i];
    let component = instance.$mount();
    if (id === instance.id) {
      if (typeof closeCallback === 'function') {
        closeCallback(instance);
      }
      // 销毁组件
      component.$destroy(true);
      // 移除节点
      document.body.removeChild(component.$el);
      // 移除数据
      instances.splice(i, 1);
      break;
    }
  }
};

export default Msgbox;
