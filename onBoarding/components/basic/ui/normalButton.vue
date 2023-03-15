<template>
  <button class="btn">{{ content }}</button>
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
  height: 40px;
  margin: 10px 0;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
}
</style>