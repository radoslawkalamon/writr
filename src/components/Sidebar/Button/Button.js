import iconList from '@/assets/icons/index';

export default {
  props: {
    alt: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true,
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
    resolveIcon() {
      const stateThemeName = 'settings.editor.theme';
      const themeName = this.$store.getters.getValue(stateThemeName);
      return this.iconList[themeName][this.icon];
    },
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
  },
  data() {
    return {
      iconList,
      toggled: false,
    };
  },
};
