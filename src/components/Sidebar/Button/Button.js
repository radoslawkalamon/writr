export default {
  props: {
    action: {
      type: Function,
      required: true
    },
    activePanel: {
      type: [Boolean, String],
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'generic'
    },
    toggle: {
      type: Boolean,
      default: false
    }
  }
}
