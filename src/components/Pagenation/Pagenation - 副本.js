export default {
  name: 'pagenation',
  props: {
    pageSizes: {
      type: Array,
      default() {
        return [20, 40, 60];
      }
    },
    pageSize: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number
    },
    currentChange: {
      type: Function
    },
    sizeChange: {
      type: Function
    }
  },
  data: function () {
    return {
      showPageNumbers: [],
      displayLimit: 8,
      currentIndex: this.current,
      ctrlSize: this.size,
      pageSizesModel: this.pageSizes,
      pageSizeModel: this.pageSize || this.pageSizes[0],
      pageCounter: 0
    };
  },
  watch: {
    pageSizeModel: {
      immediate: true,
      handler(val) {
        console.log('pageSizeModel', arguments);
        this.refreshPage();
      }
    },
    // pageSizeModel(val) {
    //   console.log('pageSizeModel', arguments);
    //   this.refreshPage();
    // },
    total(val) {
      console.log('total', arguments);
      this.refreshPage();
    }
  },
  mounted() {
    this.refreshPage();
  },
  methods: {
    refreshPage() {
      this.showPageNumbers = [];
      this.pageCounter = Math.ceil(this.total / parseInt(this.pageSizeModel));
      for (let i = 1; i <= this.pageCounter; i++) {
        this.showPageNumbers.push(i);
      }

      if (this.pageCounter <= this.displayLimit) return;

      let begin = this.currentIndex - 3;
      let end = this.currentIndex + 3;
      begin = begin <= 1 ? 1 : begin;
      end = end <= this.displayLimit ? this.displayLimit : end;
      begin = begin >= this.pageCounter - this.displayLimit ? this.pageCounter - this.displayLimit : begin;
      end = end >= this.pageCounter ? this.pageCounter : end;

      let arr = this.showPageNumbers.slice(begin - 1, end);
      this.showPageNumbers = arr;
    },
    pre() {
      let current = this.currentIndex;
      if (current > 1) this.setIndex(current - 1);
    },
    next() {
      let current = this.currentIndex;
      if (current < this.pageCounter) this.setIndex(current + 1);
    },
    setIndex(index) {
      this.currentIndex = index <= 1 ? 1 : index >= this.pageCounter ? this.pageCounter : index;
      this.currentChange(this.currentIndex);
      this.refreshPage();
    },
    pageSizeChange() {
      this.sizeChange(parseInt(this.pageSizeModel));
      this.currentIndex = 1;
    }
  }
};
