import Main from './message.vue';
import Vue from 'vue';

let MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;

/**
 * @param options
 * msg: 文字，可支持HTML
 * isIcon: true | false,
 * icon: 'iconfont icon-point',
 * duration: 2000,  持续时长
 * onClose: () => { 关闭后回调
 *    console.log('close');
 * }});
 */
const Message = function(options = {}) {
  // 赋值参数
  if (typeof options === 'string') {
    options = {
      msg: options
    };
  }

  let id = 't_message_' + seed++;

  instance = new MessageConstructor({
    data: options
  });

  instance.id = id;

  let component = instance.$mount();
  document.body.appendChild(component.$el);
  component.visible = true;
  instances.push(instance);

  // 处理手动关闭
  component.close = () => {
    Message.close(id, options.onClose);
  };

  startHide(id, instance.duration, options.onClose);
  return component;
};

// 执行隐藏
let startHide = function(id, duration, cb) {
  if (duration > 0) {
    let timer = setTimeout(() => {
      Message.close(id, typeof cb === 'function' && cb);
      clearTimeout(timer);
    }, duration);
  }
};

Message.close = (id, closeCallback) => {
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

export default Message;
