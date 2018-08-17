<template>
  <div class='sidebar'>
    <ul class='sidebar__box sidebar__box--top'>
      <slot name="top"></slot>
    </ul>
    <ul class='sidebar__box sidebar__box--bottom'>
      <slot name="bottom"></slot>
    </ul>
  </div>
</template>

<script>
export default {};
</script>