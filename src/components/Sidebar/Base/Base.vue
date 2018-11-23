<template>
  <aside class='sidebar'>
    <nav class='sidebar__box sidebar__box--top'>
      <slot name="top"></slot>
    </nav>
    <nav class='sidebar__box sidebar__box--bottom'>
      <slot name="bottom"></slot>
    </nav>
  </aside>
</template>

<script src='./Base.js'></script>
<style src='./Base.scss' lang='scss' scoped></style>
