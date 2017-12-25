<template>
  <div class="hello">
    <!-- <pagenation :current="1" :total="pageTotal" size="sm" :pageSize="20" :pageSizes="[20, 80, 100, 200]" :currentChange="handlePageChange" :sizeChange="handleSizeChange"></pagenation> -->
    <pagenation :total="pageTotal" :currentPage="currentPage" styleSize="sm" :pageNum="20" :pageNums="[20, 80, 100, 200]" :currentChange="handlePageChange" :numsChange="handleSizeChange"></pagenation>
  </div>
</template>

<script>
import Vue from 'vue';
import Pagenation from '@/components/Pagenation';

Vue.use(Pagenation);

export default {
  name: 'HelloWorld',
  data() {
    return {
      pageTotal: 400,
      currentPage: 10
    };
  },
  mounted() {
    setTimeout(() => {
      this.pageTotal = 261;
      // this.currentPage = 5;
    }, 5000);
  },
  methods: {
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
