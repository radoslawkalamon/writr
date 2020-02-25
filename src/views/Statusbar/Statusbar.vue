<template>
  <statusbar-base>
    <statusbar-item
      v-if="$store.state.settings.statusBar.showContent.words"
      :label="$t('stats.shortNames.words')"
      :value="$store.state.stats.words"
      name="words"
    />
    <statusbar-item
      v-if="$store.state.settings.statusBar.showContent.pages"
      :label="$t('stats.shortNames.pages')"
      :value="$store.state.stats.pages"
      name="pages"
    />
    <statusbar-item
      v-if="$store.state.settings.statusBar.showContent.paragraphs"
      :label="$t('stats.shortNames.paragraphs')"
      :value="$store.state.stats.paragraphs"
      name="paragraphs"
    />
    <statusbar-item
      v-if="$store.state.settings.statusBar.showContent.characters"
      :label="$t('stats.shortNames.characters')"
      :value="itemCharactersValue"
      name="characters"
    />
    <statusbar-clock
      v-if="$store.state.settings.statusBar.showContent.clock"
    />
  </statusbar-base>
</template>

<script src='./Statusbar.js'></script>
<style  src='./Statusbar.scss' lang='scss' scoped></style>
