<template>
  <div class="content">
    {{ content }}
  </div>
</template>

<script setup>
const $props = defineProps({
  content: {
    type: String,
    default: '컨텐츠 입니다.'
  }
})
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 0;
}
</style>