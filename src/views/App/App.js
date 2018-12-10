import Sidebar from '@/views/Sidebar/Sidebar.vue';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import Settings from '@/views/Settings/Settings.vue';
import Stats from '@/views/Stats/Stats.vue';

export default {
  name: 'writr',
  components: {
    Sidebar,
    Settings,
    Stats,
    TextEditor,
  },
  computed: {
    appClassNames() {
      return [
        'writr',
        `writr-theme--${this.$store.getters.getValue('settings.editor.theme')}`,
      ].join(' ');
    },
  },
  methods: {
    togglePanel(name) {
      this.openPanel = name;
    },
  },
  watch: {
    '$store.state.settings.misc.language': {
      handler: function changeLanguage(newValue) {
        this.$i18n.locale = newValue;
      },
      immediate: true,
    },
  },
  data() {
    return {
      openPanel: false,
    };
  },
};
