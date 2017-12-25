export default {
  name: 'pagenation',
  props: {
    total: {
      type: Number
    },
    currentPage: {
      type: Number,
      default: 1
    },
    styleSize: {
      type: String,
      default: ''
    },
    pageNum: {
      type: Number,
      default: 0
    },
    pageNums: {
      type: Array,
      default() {
        return [20, 40, 60];
      }
    },
    currentChange: {
      type: Function
    },
    sizeChange: {
      type: Function
    }
  },
  data() {
    return {
      // 当前页
      currentIndex: this.currentPage,
      // 总分页数量
      pageCounter: 0
    };
  },
  computed: {
    showPageNumbers() {
      let arr = [];
      // 显示多少个分页控件
      const count = 5;
      // 每页显示数量
      let pageNum = parseInt(this.pageNum);
      // 总分页数量
      let pageCounter = Math.ceil(this.total / parseInt(pageNum));
      this.pageCounter = pageCounter;
      // 开始
      let startPage = this.currentIndex - 2;
      // 结束
      let endPage = startPage + count - 1;
      console.log('startPage', startPage);
      console.log('endPage', endPage);
      console.log('pageCounter', pageCounter);

      if (startPage < 1) {
        startPage = 1;
        endPage = count;
      }

      if (endPage > pageCounter) {
        endPage = pageCounter;
        startPage = endPage - count + 1;
      }
      console.log('startPage', startPage);
      console.log('endPage', endPage);
      console.log('pageCounter', pageCounter);

      for (let i = startPage; i <= endPage; i++) {
        arr.push(i);
      }
      return arr;
    }
  },

  mounted() {

  },
  methods: {
    setIndex(index) {
      // 设定最大最小界限
      if (index < 1) {
        index = 1;
      }
      if (index > this.pageCounter) {
        index = this.pageCounter;
      }

      // 赋值当前页
      this.currentIndex = index;
      this.currentChange(index);
    }
  }
};
