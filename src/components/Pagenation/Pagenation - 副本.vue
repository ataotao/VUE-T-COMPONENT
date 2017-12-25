<template>

    <div class="pagination-component form-inline">
      <div class="form-group">
        <span :class="'font-' + ctrlSize">共 {{total}} 条</span>
      </div>
      <div class="form-group">
        <select class="form-control" v-model="pageSizeModel" :class="'input-' + ctrlSize" @change="pageSizeChange">
          <option v-for="item in pageSizesModel" :value="item">{{item}}页/条</option>
        </select>
      </div>
      <div class="form-group">
        <ul class="pagination" :class="'pagination-' + ctrlSize">
          <li @click="pre" :class="{'disabled': currentIndex == 1}">
            <a href="javascript:;">&lt;</a>
          </li>
          <li @click="setIndex(currentIndex - 5)" v-if="currentIndex >= 5">
            <a href="javascript:;">...</a>
            <!-- <a href="javascript:;">&laquo;</a> -->
          </li>
          <li v-for="item in showPageNumbers" :class="{'active': item == currentIndex}" @click="setIndex(item)">
            <a href="javascript:;">{{item}}</a>
          </li>
          <li @click="setIndex(currentIndex + 5)" v-if="currentIndex <= pageCounter - 4">
            <a href="javascript:;">...</a>
            <!-- <a href="javascript:;">&raquo;</a> -->
          </li>
          <li @click="next" :class="{'disabled': currentIndex == pageCounter}">
            <a href="javascript:;">&gt;</a>
          </li>
        </ul>
      </div>
      <div class="form-group">
        <span :class="'font-' + ctrlSize">前往</span> <input type="text" class="form-control jump-input" :class="'input-' + ctrlSize" v-model="currentIndex" @blur="setIndex(currentIndex)"> <span :class="'font-' + ctrlSize">页</span>
      </div>
    </div>

</template>

<script>
import pageSet from './Pagenation.js';
export default pageSet;
</script>


<style scoped>
  @import './Pagenation.css';
</style>
