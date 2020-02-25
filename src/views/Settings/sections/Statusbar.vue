<template functional>
  <base-section
    :title="parent.$t('settings.statusBar.title')"
    name="statusbar"
  >
    <base-toggle
      :title="parent.$t('settings.statusBar.isVisible.title')"
      action="changeState"
      item="settings.statusBar.isVisible"
      name="statusbar-is-visible"
    />
  </base-section>
</template>
