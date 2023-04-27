<template>
  <h3>
    {{ p_content }}
  </h3>
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