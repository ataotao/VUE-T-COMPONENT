<template>
  <div v-if="isVisible">
    <div class="t-modal" @click="handleClick($event)">
      <div class="t-modal-box modal fade in" tabindex="-1" data-name="backdrop">
        <div class="t-modal-dialog modal-dialog" :class="'modal-' + size">
          <div class="modal-content">

            <div class="t-modal-header" v-if="isTitle">
              <button type="button" class="close" v-if="showCloseBtn" :disabled="confirmBtnIsDis">
                <span data-name="close">&times;</span>
              </button>
              <h4 class="t-modal-title">
                <span v-text="title"></span> &nbsp;
              </h4>
            </div>

            <div class="t-modal-body">
              <slot></slot>
            </div>

            <div class="t-modal-footer" v-if="showCancelBtn || showConfirmBtn">
              <button type="button" class="btn btn-gray" v-if="showCancelBtn" v-text="cancelBtnText" data-name="close"></button>&nbsp;
              <button type="button" class="btn btn-blue" v-if="showConfirmBtn" v-text="confirmBtnText" data-name="confirm" :disabled="confirmBtnIsDis"></button>
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
import pageSet from './modal.js';
export default pageSet;
</script>


<style scoped>
  @import './modal.css';
</style>
