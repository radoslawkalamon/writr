<template>
  <div
    id="app"
    :class='this.appClassNames'
  >
    <sidebar-base>
      <sidebar-button
        slot='top'
        name='download'
        icon='download'
        :toggle='false'
        :alt='$t("general.download.title")'
        @action='sidebarButtonDownload'
      />
      <sidebar-button
        slot='bottom'
        name='settings'
        icon='settings'
        :toggle='true'
        :alt='$t("general.settings.title")'
        @action='sidebarButtonToggle'
      />
    </sidebar-base>
    <transition
      name='panel-transition'
      mode='out-in'
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
