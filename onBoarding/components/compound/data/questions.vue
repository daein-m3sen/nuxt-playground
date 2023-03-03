<template>
  <BasicData_fetch-apply :urls="urls" #data="questions">
    <slot name="questions" :data="questions.data" />
  </BasicData_fetch-apply>
</template>

<script setup>
const urls = computed(() => {
  return '/api/questions'
})
</script>