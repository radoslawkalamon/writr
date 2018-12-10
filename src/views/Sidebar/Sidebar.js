import downloadFile from 'downloadjs';

import iconList from '@/assets/icons/index';
import SidebarBase from '@/components/Sidebar/Base/Base.vue';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';

export default {
  components: {
    SidebarBase,
    SidebarButton,
  },
  methods: {
    buttonDownload() {
      const date = new Date();
      const filename = `writr_${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}__${date.getHours()}_${date.getMinutes()}.txt`;
      const text = document.getElementById('text-editor').innerText;
      this.downloadFile(text, filename, 'text/plain');
    },
    downloadFile,
    togglePanel(name) {
      this.openPanel = this.openPanel === name ? false : name;
      this.$emit('togglePanel', this.openPanel);
    },
    resolveIcon(icon) {
      const stateThemeName = 'settings.editor.theme';
      const themeName = this.$store.getters.getValue(stateThemeName);
      return this.iconList[themeName][icon];
    },
  },
  data() {
    return {
      iconList,
      openPanel: false,
    };
  },
};
