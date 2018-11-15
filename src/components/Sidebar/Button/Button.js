import iconList from '@/assets/icons/index';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'generic',
    },
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    wrapperClassNames() {
      return [
        'sidebar-button',
        `sidebar-button--${this.name}`,
        this.toggled ? 'sidebar-button--active' : '',
      ].join(' ');
    },
    resolveIcon() {
      const stateThemeName = 'settings.editor.theme';
      const themeName = this.$store.getters.getValue(stateThemeName);
      return this.iconList[themeName][this.icon];
    },
  },
  methods: {
    onClick() {
      this.toggled = this.toggle ? !this.toggled : false;
      this.$emit('action', this.name);
    },
  },
  data() {
    return {
      toggled: false,
      iconList,
    };
  },
};
