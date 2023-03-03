<template>
  <div class="line">
    <slot name="left">왼쪽</slot>
    <slot name="right">오른쪽</slot>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
}
</style>