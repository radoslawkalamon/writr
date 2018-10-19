<template>
  <div id="app" :class='this.appClassNames'>
    <sidebar-base>
      <sidebar-button @action='sidebarButtonToggle' name='download' icon='download' :alt='$t("general.download.title")' :toggle='false' slot='top'></sidebar-button>
      <sidebar-button @action='sidebarButtonToggle' name='settings' icon='settings' :alt='$t("general.settings.title")' :toggle='true' slot='bottom'></sidebar-button>
    </sidebar-base>
    <transition name='panel-transition' mode='out-in'>
      <settings v-if='this.openPanel === "settings"'></settings>
    </transition>
    <text-editor></text-editor>
  </div>
</template>

<script src='./App.js'></script>
<style src='./App.scss' lang='scss'></style>
