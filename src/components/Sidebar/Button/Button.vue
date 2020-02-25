<template functional>
  <button
    :class="[
      'sidebar-button',
      `sidebar-button--${props.name}`,
      { 'sidebar-button--active': props.toggle && props.activePanel === props.name },
    ]"
    :title="props.alt"
    @click="props.action(props.name)"
  >
    <img
      :alt="props.alt"
      :src="parent.resolveIcon(props.icon)"
    >
  </button>
</template>

<script src='./Button.js'></script>
<style  src='./Button.scss' lang='scss' scoped></style>
