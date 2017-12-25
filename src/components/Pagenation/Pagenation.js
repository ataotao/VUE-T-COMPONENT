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
      default: 20
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
    numsChange: {
      type: Function
    }
  },
  data() {
    return {
      // 当前页
      currentIndex: this.currentPage,
      // 总分页数量
      pageCounter: 0,
      // 每页条数
      numsModel: this.pageNum
    };
  },
  watch: {
    // 监听当前页变化
    currentPage: {
      immediate: true,
      handler(val) {
        this.currentIndex = val;
      }
    }
  },
  computed: {
    // 总页数数组
    totalNumbers() {
      let arr = [];
      for (let i = 1; i <= this.pageCounter; i++) {
        arr.push(i);
      }
      return arr;
    },
    // 显示页数数组
    showPageNumbers() {
      let arr = [];
      // 显示多少个分页控件
      const count = 5;
      // 每页显示数量
      let pageNum = parseInt(this.numsModel);
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
        startPage = (endPage - count + 1) < 1 ? 1 : endPage - count + 1;
      }
      console.log('startPage', startPage);
      console.log('endPage', endPage);
      console.log('pageCounter', pageCounter);

      for (let i = startPage; i <= endPage; i++) {
        arr.push(i);
      }

      // 如果分页总数变化，根据条件当前索引回退到最后一页
      if (this.currentIndex > pageCounter) {
        this.currentIndex = pageCounter;
      }
      return arr;
    }
  },

  mounted() {

  },
  methods: {
    // 分页动作
    setIndex(index) {
      let i = parseInt(index);
      if (i === this.currentIndex) return;
      // 设定最大最小界限
      if (i < 1) {
        i = 1;
      }
      if (i > this.pageCounter) {
        i = this.pageCounter;
      }

      // 赋值当前页
      this.currentIndex = i;
      this.currentChange(i);
    },
    // 切换每页数量
    handleNumsChange() {
      this.numsChange(this.numsModel);
    }
  }
};
