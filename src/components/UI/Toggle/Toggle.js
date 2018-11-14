export default {
  props: {
    title: {
      type: String,
      default: 'Please provide title!',
    },
    item: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputWrapperClassNames() {
      return [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        this.value ? 'base-toggle__form-wrapper--active' : '',
      ].join(' ');
    },
    inputClassNames() {
      return [
        'base-toggle__input',
        this.value ? 'base-toggle__input--active' : '',
      ].join(' ');
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: !this.value,
      });
    },
  },
  created() {
    this.$watch(`$store.state.${this.item}`, function toggleButton(newValue) {
      this.value = newValue;
    });
  },
  data() {
    return {
      value: this.$store.getters.getValue(this.item),
    };
  },
};

