<template>
  <sidebar-panel
    name='settings'
  >
    <base-header
      :header='true'
      v-text='$t("settings.title")'
    />
    <section-theme />
    <section-text />
    <section-text-editor />
    <section-stats />
    <section-statusbar />
    <section-statusbar-content />
    <section-misc />
  </sidebar-panel>
</template>

<script src='./Settings.js'></script>
<style src='./Settings.scss' lang='scss'></style>
