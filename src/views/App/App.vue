<template>
  <div id="app" :class='this.appClassNames'>
    <sidebar-base>
      <sidebar-button @action='sidebarButtonToggle' name='settings' icon='settings' :alt='$t("general.sidebar.settings.title")' :toggle='true' slot='bottom'></sidebar-button>
    </sidebar-base>
    <transition name='panel-transition' mode='out-in'>
      <settings v-if='this.openPanel === "settings"'></settings>
    </transition>
    <text-editor></text-editor>
  </div>
</template>

<script src='./App.js'></script>
<style src='./App.scss' lang='scss'></style>
