import iconList from '@/assets/icons/index';

export default {
  props: {
    icon: {
      type: String,
      default: '',
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
  },
  methods: {
    onClick() {
      this.toggled = this.toggle ? !this.toggled : false;
      this.$emit('action', this.name);
    },
    resolveIcon(icon) {
      const stateThemeName = 'settings.editor.theme';
      const themeName = this.$store.getters.getValue(stateThemeName);
      return iconList[themeName][icon];
    },
  },
  data() {
    return {
      toggled: false,
    };
  },
};
