<template>
  <transition name="t-message-fade">
    <div class="t-message text-center" v-if="visible">
      <div class="t-icon" :class="icon ? icon : 'iconfont icon-point'" v-if="isIcon"></div>
      <div v-html="msg"></div>
    </div>
  </transition>

</template>

<script>
export default {
  data() {
    return {
      visible: false,
      msg: '',
      isIcon: false,
      duration: 2000
    };
  },
  computed: {

  },

  watch: {

  },

  mounted() {},
  beforeDestroy() {

  },
  methods: {

  }
};
</script>


<style scoped>
@import "./message.css";
</style>
