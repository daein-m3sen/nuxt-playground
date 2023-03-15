<template>
  <header class="default-header">
    <BasicUi_logo class="logo" @click="$router.push('/')" />
    <BasicUi_icon-button class="item">
      <template v-slot:icon>
        <div @click="f__changeMode" style="font-size: 24px" class="mdi mdi-theme-light-dark" />
      </template>
    </BasicUi_icon-button>
  </header>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.default-header {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  background-color: v-bind('c__themes.defaultBackground');

  & .logo {
    filter: v-bind('c__themes.theme.invertPercentage');
  }

  & .item {
    margin-left: auto;
    color: v-bind('c__themes.theme.iconColor');
  }
}
</style>