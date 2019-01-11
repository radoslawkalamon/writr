<template functional>
  <base-section
    name='statusbar'
    :title='parent.$t("settings.statusBar.title")'
  >
    <base-toggle
      action='changeState'
      item='settings.statusBar.isVisible'
      name='statusbar-is-visible'
      :title='parent.$t("settings.statusBar.isVisible.title")'
    />
  </base-section>
</template>
