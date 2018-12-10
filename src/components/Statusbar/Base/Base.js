import { throttle } from 'throttle-debounce';

import StatusbarItem from '@/components/Statusbar/Item/Item.vue';
import StatusbarClock from '@/components/Statusbar/Clock/Clock.vue';

const UPDATE_SIZE_TO_STORE_THROTTLE = 2000;

export default {
  components: {
    StatusbarItem,
    StatusbarClock,
  },
  computed: {
    itemCharactersValue() {
      return `${this.$store.state.stats.charactersWithoutSpaces} / ${this.$store.state.stats.characters}`;
    },
  },
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
