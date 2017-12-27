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

  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
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
@import url("//at.alicdn.com/t/font_241505_rwlom992euq5mi.css");
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
