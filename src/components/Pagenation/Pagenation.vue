<template>

    <div class="t-pagination form-inline">
      <div class="form-group">
        <span :class="'font-' + styleSize">共 {{total}} 条</span>
      </div>
      <div class="form-group">
        <select class="form-control" v-model="numsModel" :class="'input-' + styleSize" @change="setNums">
          <option v-for="item in pageNums" :value="item">{{item}}页/条</option>
        </select>
      </div>
      <div class="form-group">
        <ul class="pagination" :class="'pagination-' + styleSize">
          <!-- 上一页 -->
          <li @click="setIndex(currentIndex - 1)" :class="{'disabled': currentIndex == 1}">
            <a href="javascript:;">&lt;</a>
          </li>
          <!-- 第一页 -->
          <li :class="{ active: currentIndex === 1 }" v-if="firstPageIsShow" @click="setIndex(1)">
            <a href="javascript:;">1</a>
          </li>
          <!-- 更多页 -->
          <li @click="setIndex(currentIndex - 5)" v-if="prevMoreIsShow">
            <a href="javascript:;">...</a>
          </li>
          <!-- 分页中间部分 -->
          <li v-for="item in showPageNumbers" :class="{'active': item == currentIndex}" @click="setIndex(item)">
            <a href="javascript:;">{{item}}</a>
          </li>
          <!-- 更多页 -->
          <li @click="setIndex(currentIndex + 5)" v-if="nextMoreIsShow">
            <a href="javascript:;">...</a>
          </li>
          <!-- 最后页 -->
          <li :class="{ active: currentIndex === pageCounter }" v-if="lastPageIsShow" @click="setIndex(pageCounter)">
            <a href="javascript:;">{{pageCounter}}</a>
          </li>
          <!-- 下一页 -->
          <li @click="setIndex(currentIndex + 1)" :class="{'disabled': currentIndex == pageCounter}">
            <a href="javascript:;">&gt;</a>
          </li>
        </ul>
      </div>
      <!-- 跳转页面 -->
      <div class="form-group">
        <span :class="'font-' + styleSize">前往</span>
        <select class="form-control jump-input" v-model="currentIndex" :class="'input-' + styleSize" @change="setIndex(currentIndex)">
          <option v-for="item in totalNumbers" :value="item" :disabled="item == currentIndex">{{item}}</option>
        </select>
        <span :class="'font-' + styleSize">页</span>
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
