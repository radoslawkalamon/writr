export default {
  props: {
    title: {
      type: String,
      default: 'Please provide title!',
    },
    errorTip: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: '',
    },
    item: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'generic',
    },
    action: {
      type: String,
      required: true,
    },
  },
  computed: {
    mainElementClassNames() {
      return [
        'base-input',
        `base-input--${this.name}`,
      ].join(' ');
    },
    inputWrapperClassNames() {
      return [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        this.unit !== '' ? 'base-input__form-wrapper--unit' : '',
        this.error ? 'base-input__form-wrapper--error' : '',
      ].join(' ');
    },
    inputClassNames() {
      return [
        'base-input__input',
        this.unit !== '' ? 'base-input__input--unit' : '',
        this.error ? 'base-input__input--error' : '',
      ].join(' ');
    },
  },
  methods: {
    onChange() {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: this.value,
        componentObject: this,
        componentErrorProperty: 'error',
      });
    },
  },
  data() {
    return {
      value: this.$store.getters.getValue(this.item),
      error: false,
    };
  },
};
