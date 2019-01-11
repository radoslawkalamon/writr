<template>
  <statusbar-base>
    <statusbar-item
      :label='$t("stats.shortNames.words")'
      name='words'
      :value='$store.state.stats.words'
      v-if='$store.state.settings.statusBar.showContent.words'
    />
    <statusbar-item
      :label='$t("stats.shortNames.pages")'
      name='pages'
      :value='$store.state.stats.pages'
      v-if='$store.state.settings.statusBar.showContent.pages'
    />
    <statusbar-item
      :label='$t("stats.shortNames.paragraphs")'
      name='paragraphs'
      :value='$store.state.stats.paragraphs'
      v-if='$store.state.settings.statusBar.showContent.paragraphs'
    />
    <statusbar-item
      :label='$t("stats.shortNames.characters")'
      name='characters'
      :value='itemCharactersValue'
      v-if='$store.state.settings.statusBar.showContent.characters'
    />
    <statusbar-clock
      v-if='$store.state.settings.statusBar.showContent.clock'
    />
  </statusbar-base>
</template>

<script src='./Statusbar.js'></script>
<style  src='./Statusbar.scss' lang='scss' scoped></style>
