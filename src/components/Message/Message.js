export default {
  name: 't-message',
  props: {
    message: {
      type: String,
      default: ''
    },
    pageNums: {
      type: Array,
      default () {
        return [20, 40, 60];
      }
    },
    setCurrentFn: {
      type: Function
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },
  methods: {

  }
};
