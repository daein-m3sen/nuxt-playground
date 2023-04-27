<template>
  <h2>
    {{ p_content }}
  </h2>
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