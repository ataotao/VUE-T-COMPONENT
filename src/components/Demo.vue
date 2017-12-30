<template>
  <div class="demo">
    <h3>分页 t-pagenation</h3>
    <t-pagenation :total="pageTotal" mode="full" :currentPage="currentPage" styleSize="sm" :pageNum="20" :pageNums="[20, 80, 100, 200]" :setCurrentFn="handlePageChange" :setNumsFn="handleSizeChange"></t-pagenation>
    <h3>页面通知 t-message</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="msgFn('string')">便捷使用</button>
      <button type="button" class="btn btn-primary" @click="msgFn('open')">打开通知,调用close关闭</button>
      <button type="button" class="btn btn-primary" @click="msgFn('autoHide')">打开自动隐藏通知</button>
    </div>

    <h3>对话框 t-msgbox</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="msgboxFn()">点击弹出对话框</button>
    </div>

    <h3>暂无数据 t-nodata</h3>
    <div>
      <!-- 默认状态 -->
      <t-nodata></t-nodata>
      <!-- 带参数 -->
      <t-nodata msg="自定义无数据内容" icon="glyphicon glyphicon-floppy-remove" iconSize="50px" fontSize="18px" color="black">
        <div style="font-size:14px; color:#CC0000;">这里可以放一些其他的slot内容，<button type="button" class="btn btn-xs btn-primary" @click="count++">+</button> 数字：{{count}}</div>
      </t-nodata>
    </div>

    <h3>页面加载 t-pageloading</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="pageloadingFn">点击页面加载</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      count: 0,
      pageTotal: 400,
      currentPage: 1
    };
  },
  mounted() {
    setTimeout(() => {
      this.pageTotal = 261;
      this.currentPage = 5;
    }, 5000);
  },
  methods: {
    pageloadingFn() {
      this.$pageloading.open();
      setTimeout(() => {
        this.$pageloading.close();
      }, 2000);

      setTimeout(() => {
        let loading = this.$pageloading.open();
        setTimeout(() => {
          loading.close();
        }, 500);
      }, 1000);
    },
    msgboxFn() {
      this.$msgbox({
        title: '提示111',
        msg: '确定删除此信息么？', // 只有此项为必填项
        isTitle: true,
        showCloseBtn: true,
        showConfirmBtn: true,
        showCancelBtn: true,
        confirmBtnText: '明白',
        cancelBtnText: '不明白',
        closeOnBackdrop: true,
        onConfirm: () => {
          console.log('确定');
          this.$msgbox('成功删除!'); // 如果没有其他后续操作，简单使用方式，可以只传入message
        },
        onCancel: () => {
          console.log('取消');
        }
      });
    },
    msgFn(type) {
      switch (type) {
        case 'autoHide':
          this.$message({
            msg: '这是 <i>HTML</i> 片段',
            isIcon: true,
            icon: 'iconfont icon-point',
            duration: 1000,
            onClose: () => {
              console.log('close');
            }
          });

          break;
        case 'open':
          let msg = this.$message({
            msg: '这段需要手动关闭',
            duration: 0
          });
          setTimeout(() => {
            msg.close();
          }, 2000);
          break;
        case 'string':
          // 最简单使用
          this.$message('测试');
          break;
      }
    },
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 2;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("//at.alicdn.com/t/font_241505_rwlom992euq5mi.css"); */
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
