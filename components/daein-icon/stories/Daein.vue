<template>
  <button>{{ name }}</button>
</template>

<script setup>
const $props = defineProps({
  name: {
    type: String,
    default: 'beat'
  }
})
</script>