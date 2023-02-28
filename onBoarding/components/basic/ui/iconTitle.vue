<template>
  <div>
    <span :class="`mdi mdi-${icon}`"></span>
    <span class="title">아이콘이 있는 타이틀 입니다.</span>
  </div>
</template>

<script setup>
const $props = defineProps({
  icon: {
    type: String,
    default: 'message-question-outline',
  }
})
</script>

<style lang="scss">
.title {
  margin-left: 5px;
}
</style>