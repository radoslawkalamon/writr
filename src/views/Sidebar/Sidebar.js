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
    newFile() {
      document.getElementById('text-editor').innerHTML = `<div>${this.$t('components.TextEditor.welcomeText')}</div>`;
      this.$store.dispatch('calculateStats', this.$t('components.TextEditor.welcomeText'));
    },
    buttonDownload() {
      const date = new Date();
      const filename = [
        'writr',
        date.getFullYear(),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        date.getDate().toString().padStart(2, '0'),
        date.getHours().toString().padStart(2, '0'),
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0'),
      ].join('_');
      const text = document.getElementById('text-editor').innerText;
      this.downloadFile(text, `${filename}.txt`, 'text/plain');
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
