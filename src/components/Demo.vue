<template>
  <div class="demo">
    <!-- <router-link :to="{ name: 'demo'}">A</router-link>
    <router-link :to="{ name: 'demo1'}">B</router-link> -->
    <h3>分页 t-pagenation</h3>
    <t-pagenation :total="pageTotal" mode="full" :currentPage="currentPage" styleSize="sm" :pageNum="20" :pageNums="[20, 80, 100, 200]" :setCurrentFn="handlePageChange" :setNumsFn="handleSizeChange"></t-pagenation>
    <hr>

    <h3>页面通知 t-message</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="msgFn('string')">便捷使用</button>
      <button type="button" class="btn btn-primary" @click="msgFn('open')">打开通知,调用close关闭</button>
      <button type="button" class="btn btn-primary" @click="msgFn('autoHide')">打开自动隐藏通知</button>
    </div>
    <hr>

    <h3>对话框 t-msgbox</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="msgboxFn()">点击弹出对话框</button>
    </div>
    <hr>

    <h3>暂无数据 t-nodata</h3>
    <div>
      <!-- 默认状态 -->
      <t-nodata></t-nodata>

      <div style="height:30px;"></div>

      <!-- 带参数 -->
      <t-nodata msg="自定义无数据内容" icon="glyphicon glyphicon-floppy-remove" iconSize="50px" fontSize="18px" color="black">
        <div style="font-size:14px; color:#CC0000;">这里可以放一些其他的slot内容，<button type="button" class="btn btn-xs btn-primary" @click="count++">+</button> 数字：{{count}}</div>
      </t-nodata>
    </div>
    <hr>

    <h3>页面加载 t-pageloading</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="pageloadingFn">点击页面加载</button>
    </div>
    <hr>

    <h3>局部加载 t-loading</h3>
    <div style="margin-bottom:20px;">
      <button type="button" class="btn btn-primary" @click="loading = true">启动加载</button>
      <button type="button" class="btn btn-primary" @click="loading = false">停止加载</button>
    </div>
    <div class="clearfix">
      <div class="col-xs-12 col-md-offset-4 col-md-2">
        <div class="loadingbox" v-t-loading='loading'>
            默认调用
        </div>
      </div>
      <div class="col-xs-12 col-md-2">
        <div class="loadingbox" v-t-loading='loading' text='加载中' color="white" background="rgba(0, 0, 0, 0.9)">
            带参数调用
        </div>
      </div>
    </div>
    <hr>

    <h3>模态框 t-modal</h3>
    <div>
      <button type="button" class="btn btn-primary" @click="modalVisible = true">弹出模态框</button>
      <t-modal :visible.sync="modalVisible" @onConfirm="modalConfirm" @onClose="modalClose">
        这里可以放模态框，<button type="button" class="btn btn-xs btn-primary" @click="count++">+</button> 数字：{{count}}
        <table class="table">
          <caption>Optional table caption.</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </t-modal>
    </div>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      modalVisible: false,
      loading: false,
      count: 0,
      pageTotal: 400,
      currentPage: 1
    };
  },
  mounted() {
    // this.modalVisible = true;
    // this.$pageloading.open();
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
    },
    modalConfirm(close) {
      console.log('modalConfirm');
      // 模拟异步操作
      setTimeout(() => {
        // 关闭模态框
        close(true);
      }, 1000);
    },
    modalClose() {
      console.log('modalClose');
      this.$msgbox('取消!');
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
.loadingbox{
  border: solid 1px #CCC;
  width: 235px;
  height: 235px;
  background-color: #EEE;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

hr{
  margin: 40px 0;
}
</style>
