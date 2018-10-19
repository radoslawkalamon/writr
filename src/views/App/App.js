import SidebarBase from '@/components/Sidebar/Base/Base.vue';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import Settings from '@/views/Settings/Settings.vue';

export default {
  name: 'writr',
  components: {
    SidebarBase,
    SidebarButton,
    Settings,
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
    closePanel() {
      this.openPanel = false;
    },
    sidebarButtonToggle(name) {
      this.openPanel = this.openPanel === name ? false : name;
    },
  },
  watch: {
    '$store.state.settings.misc.language': function changeLanguage(newValue) {
      this.$i18n.locale = newValue;
    },
  },
  data() {
    return {
      openPanel: false,
    };
  },
};
