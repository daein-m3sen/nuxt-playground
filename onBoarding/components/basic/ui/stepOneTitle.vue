<template>
  <span class="title-one">
    {{ title }}
  </span>
</template>

<script setup>
const $props = defineProps({
  title: {
    type: String,
    default: '타이틀 #1',
  }
})
</script>

<style>
.title-one {
  font-size: 32px;
  font-weight: 600;
}
</style>