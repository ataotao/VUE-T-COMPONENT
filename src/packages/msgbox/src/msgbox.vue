<template>
  <div v-if="visible">
    <div class="t-msgbox" @click="handleClick($event)">
      <div class="t-msgbox-box modal fade in" tabindex="-1" data-name="backdrop">
        <div class="t-modal-dialog modal-dialog modal-sm">
          <div class="modal-content">

            <div class="t-msgbox-header" v-if="isTitle">
              <button type="button" class="close" v-if="showCloseBtn">
                <span data-name="close">&times;</span>
              </button>
              <h4 class="t-msgbox-title">
                <span v-text="title"></span> &nbsp;
              </h4>
            </div>

            <div class="t-msgbox-body">
              <div v-if="isHtml" v-text="msg"></div>
              <div v-else v-html="msg"></div>
            </div>

            <div class="t-msgbox-footer" v-if="showCancelBtn || showConfirmBtn">
              <button type="button" class="btn btn-gray" v-if="showCancelBtn" v-text="cancelBtnText" data-name="cancel"></button>&nbsp;
              <button type="button" class="btn btn-blue" v-if="showConfirmBtn" v-text="confirmBtnText" data-name="confirm"></button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="modal-backdrop fade in"></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    msg: {
      type: String,
      default: ''
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    isTitle: {
      type: Boolean,
      default: true
    },
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    showCancelBtn: {
      type: Boolean,
      default: false
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    closeOnBackdrop: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  beforeDestroy() {

  },
  methods: {

  }
};
</script>


<style scoped>
@import "./msgbox.css";
</style>
