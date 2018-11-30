<template>
  <aside
    class='sidebar'
  >
    <nav
      class='sidebar__box sidebar__box--top'
    >
      <slot
        name='top'
      />
    </nav>
    <nav
      class='sidebar__box sidebar__box--bottom'
    >
      <slot
        name='bottom'
      />
    </nav>
  </aside>
</template>

<script src='./Base.js'></script>
<style src='./Base.scss' lang='scss' scoped></style>
