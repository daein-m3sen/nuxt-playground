<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script setup>
const $props = defineProps({
  title: {
    type: String,
    default: '타이틀 #1',
  }
})
</script>