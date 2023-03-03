<template>
  <h2>
    {{ title }}
  </h2>
</template>

<script setup>
const $props = defineProps({
  title: {
    type: String,
    default: '타이틀 #2',
  }
})
</script>