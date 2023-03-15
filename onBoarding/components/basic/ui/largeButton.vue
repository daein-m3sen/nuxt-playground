<template>
  <button>{{ content }}</button>
</template>

<script setup>
const $props = defineProps({
  content: {
    type: String,
    default: 'Button'
  }
})
</script>

<style lang="scss" scoped>
.btn {
  height: 60px;
  padding: 10px 30px;
  color: white;
  border-radius: 0.5rem;
}
</style>