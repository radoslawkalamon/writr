import { throttle } from 'throttle-debounce';

const UPDATE_SIZE_TO_STORE_THROTTLE = 2000;

export default {
  methods: {
    updateSizeToStore: throttle(
      UPDATE_SIZE_TO_STORE_THROTTLE,
      (that, isDestroy) => {
        const storeAction = 'changeState';
        const item = 'sizes.statusBar.height';
        const value = isDestroy ? 0 : that.$el.getBoundingClientRect().height;

        that.$store.dispatch(storeAction, {
          item,
          value,
        });
      },
    ),
    eventResizeCallback() {
      this.updateSizeToStore(this);
    },
  },
  mounted() {
    this.updateSizeToStore(this);
    window.addEventListener('resize', this.eventResizeCallback);
  },
  beforeDestroy() {
    this.updateSizeToStore(this, true);
    window.removeEventListener('resize', this.eventResizeCallback);
  },
};
