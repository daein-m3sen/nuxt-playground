<template>
  <input type="text" :placeholder="placeholder">
</template>

<script setup>
const $props = defineProps({
  placeholder: {
    type: String,
    default: '입력해주세요.'
  }
})
</script>