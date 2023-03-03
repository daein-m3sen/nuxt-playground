<template>
  <div class="icon-title">
    <div class="icon" :class="`mdi mdi-${icon}`"></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
const $props = defineProps({
  icon: {
    type: String,
    default: 'alpha-q',
  },
  title: {
    type: String,
    default: '아이콘이 있는 타이틀 입니다.',
  }
})
</script>

<style lang="scss" scoped>
.icon-title {
  display: flex;
  align-items: center;

  & .title {
    margin: 0 5px;
    text-align: left;
  }

  & .icon {
    width: 30px;
    margin: 0 5px;
    font-size: 24px;
  }
}
</style>