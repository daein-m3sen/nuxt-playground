<template>
  <button class="icon-btn">
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.icon-btn {
  width: 25px;
  font-size: 18px;
  margin: 0 5px;
  color: v-bind('c__themes.theme.iconColor');
}
</style> 