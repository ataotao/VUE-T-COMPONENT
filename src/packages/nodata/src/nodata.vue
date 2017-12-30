<template>
  <span class="no-data" :style="{'color': color}">
    <span class="icon" :class="icon" :style="{ 'font-size': iconSize}"></span>
    <span class="text-center f24 no-data-text" v-html="msg"></span>
    <slot></slot>
  </span>
</template>
<script>
import '../../_icon/iconfont.css';
export default {
  name: 't-nodata',
  props: {
    msg: {
      type: String,
      default: '暂未有相关数据'
    },
    icon: {
      type: String,
      default: 'iconfont icon-weifabushangpin'
    },
    iconSize: {
      type: String,
      default: '160px'
    },
    color: {
      type: String,
      default: '#DDD'
    }
  },
  methods: {

  }
};
</script>
<style scoped>
/* 空数据 */
.no-data {
  text-align: center;
  font-size: 30px;
}
.no-data .icon {
  line-height: 1;
}
.no-data-text{
  display: block
}
</style>
