export default {
  name: 't-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    isTitle: {
      type: Boolean,
      default: true
    },
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    closeOnBackdrop: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'lg'
    }
  },
  data() {
    return {
      confirmBtnIsDis: false,
      isVisible: false
    };
  },
  computed: {

  },
  watch: {
    visible(val) {
      document.body.style.overflow = val ? 'hidden' : '';
      this.$emit('update:visible', val);
      this.isVisible = val;
    }
  },
  mounted() {

  },
  methods: {
    handleClick(event) {
      let elName = event.target.dataset.name;
      if (elName) {
        if (elName === 'backdrop' && !this.closeOnBackdrop) return;
        if (elName === 'close' || elName === 'backdrop') this.close('onClose');
        if (elName === 'confirm') {
          this.confirmBtnIsDis = true;
          this.$emit('onConfirm', this.close);
        }
      }
    },
    close(type) {
      this.isVisible = !type;
      this.$emit('update:visible', this.isVisible);
      if (type && type !== true) {
        this.$emit(type);
      }
      this.confirmBtnIsDis = false;
    }
  }
};
