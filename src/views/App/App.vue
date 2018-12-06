<template>
  <div
    :class='this.appClassNames'
    id="app"
  >
    <sidebar-base>
      <sidebar-button
        @action='sidebarButtonDownload'
        :alt='$t("general.download.title")'
        icon='download'
        name='download'
        slot='top'
        :toggle='false'
      />
      <sidebar-button
        @action='sidebarButtonToggle'
        :alt='$t("settings.title")'
        icon='settings'
        name='settings'
        slot='bottom'
        :toggle='true'
      />
    </sidebar-base>
    <transition
      mode='out-in'
      name='panel-transition'
    >
      <settings
        v-if='this.openPanel === "settings"'
      />
    </transition>
    <text-editor />
  </div>
</template>

<script src='./App.js'></script>
<style src='./App.scss' lang='scss'></style>
