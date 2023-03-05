<template>
  <BasicData_fetch-apply :urls="urls" #data="questions">
    <slot name="questions" :data="questions.data" />

  </BasicData_fetch-apply>
</template>

<script setup>
const $props = defineProps({
  urls: {
    type: String,
    default: '/api/questions'
  }
})
</script>