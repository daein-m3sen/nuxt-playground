<template>
  <h1>
    {{ p_content }}
  </h1>
</template>

<script setup>
const $props = defineProps({
  content: {
    type: String,
    default: '',
  }
})

const { content: p_content } = toRefs($props)
</script>