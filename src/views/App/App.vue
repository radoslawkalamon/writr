<template>
  <div
    id="app"
    :class="appClassNames"
  >
    <sidebar
      @togglePanel="togglePanel"
    />
    <transition
      mode="out-in"
      name="panel-transition"
    >
      <settings
        v-if="openPanel === 'settings'"
      />
      <stats
        v-if="openPanel === 'stats'"
      />
    </transition>
    <transition
      name="fade"
    >
      <statusbar
        v-if="$store.state.settings.statusBar.isVisible"
      />
    </transition>
    <text-editor />
  </div>
</template>

<script src='./App.js'></script>
<style src='./App.scss' lang='scss'></style>
