<template functional>
  <div
    :class="['sidebar-panel', `sidebar-panel--${props.name}`]"
  >
    <slot />
  </div>
</template>

<script src='./Panel.js'></script>
<style src='./Panel.scss' lang='scss' scoped></style>
