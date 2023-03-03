<template>
  <button class="border-button">{{ content }}</button>
</template>       

<script setup>
const $props = defineProps({
  content: {
    type: String,
    default: '원형 버튼입니다'
  }
})
</script>

<style lang="scss" scoped>
.border-button {
  font-weight: 400;
  padding: 10px 60px;
  border-radius: 2rem;
  border: 1px solid lightgrey;
}
</style>