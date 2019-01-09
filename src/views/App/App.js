import Sidebar from '@/views/Sidebar/Sidebar.vue';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import Statusbar from '@/views/Statusbar/Statusbar.vue';
import Settings from '@/views/Settings/Settings.vue';
import Stats from '@/views/Stats/Stats.vue';

export default {
  name: 'writr',
  components: {
    Sidebar,
    Settings,
    Stats,
    Statusbar,
    TextEditor,
  },
  computed: {
    appClassNames() {
      return [
        'writr',
        `writr-theme--${this.$store.getters.getValue('settings.editor.theme')}`,
      ];
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
  mounted() {
    /**
     * Store upgrade from older version tool
     */
    if (this.$store.state.settings.misc.version === 'alfa') {
      this.$store.state.settings.misc.version = 'beta';
    }
  },
  data() {
    return {
      openPanel: false,
    };
  },
};
