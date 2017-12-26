export default {
  name: 't-pagenation',
  props: {
    mode: {
      type: String,
      default: 'full'
    },
    total: {
      type: Number
    },
    currentPage: {
      type: Number,
      default: 1
    },
    styleSize: {
      type: String,
      default: 'sm'
    },
    pageNum: {
      type: Number,
      default: 20
    },
    pageNums: {
      type: Array,
      default () {
        return [20, 40, 60];
      }
    },
    setCurrentFn: {
      type: Function
    },
    setNumsFn: {
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
      numsModel: this.pageNum,
      // 显示多少个分页控件
      count: 5,
      // 更多页状态
      firstPageIsShow: false,
      lastPageIsShow: false,
      prevMoreIsShow: false,
      nextMoreIsShow: false
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
      const count = this.count;
      // 每页显示数量
      let pageNum = parseInt(this.numsModel);
      // 总分页数量
      let pageCounter = Math.ceil(this.total / parseInt(pageNum));
      // 当前页
      let current = this.currentIndex;
      // 开始
      let startPage = current - 2;
      // 结束
      let endPage = startPage + count - 1;
      // console.log('startPage', startPage);
      // console.log('endPage', endPage);
      // console.log('pageCounter', pageCounter);

      if (startPage < 1) {
        startPage = 1;
        endPage = count;
      }

      if (endPage > pageCounter) {
        endPage = pageCounter;
        startPage = (endPage - count + 1) < 1 ? 1 : endPage - count + 1;
      }
      // console.log('startPage', startPage);
      // console.log('endPage', endPage);
      // console.log('pageCounter', pageCounter);

      // 构造渲染分页控件数组
      for (let i = startPage; i <= endPage; i++) {
        arr.push(i);
      }

      // 如果分页总数大于变化前页数，根据条件当前索引回退到最后一页
      if (current > pageCounter) {
        current = pageCounter;
      }

      // 第一页、最后页及更多页显示状态
      this.firstPageIsShow = current > 3 && pageCounter > 5;
      this.lastPageIsShow = current < pageCounter - 2 && pageCounter > 5;
      this.prevMoreIsShow = current > 4 && pageCounter > 5;
      this.nextMoreIsShow = current < pageCounter - 3 && pageCounter > 5;

      // 赋值总分页数量
      this.pageCounter = pageCounter;

      return arr;
    }
  },

  mounted() {

  },
  methods: {
    // 分页动作
    setIndex(index) {
      let i = parseInt(index);
      // 设定最大最小界限及当前页不做响应
      if (i === parseInt(this.currentIndex) && window.event.type !== 'change') return;
      if (i > this.pageCounter) {
        if (i === this.pageCounter + 1 && i - this.currentIndex !== this.count) return;
        i = this.pageCounter;
      };
      if (i < 1) {
        if (i === 0 && this.currentIndex !== this.count) return;
        i = 1;
      };
      // 赋值当前页
      this.setCurrentFn(this.currentIndex = i);
    },
    // 切换每页数量
    setNums() {
      this.setNumsFn(this.numsModel);
    }
  }
};
