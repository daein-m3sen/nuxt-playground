<template>
  <button>{{ p_name }}</button>
</template>

<script setup>
const $props = defineProps(['name'])

const { name: p_name } = toRefs($props)
</script>