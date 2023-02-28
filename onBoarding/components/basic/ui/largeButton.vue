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

<style lang="scss">
.btn {
  height: 80px;
  background-color: white;
  border: 1px solid lightskyblue;
}
</style>