<template>
  <BasicData_fetch-apply :urls="_urls" #data="questions">
    <slot name="questions" :data="questions.data" />

  </BasicData_fetch-apply>
</template>

<script setup>
const _urls = computed(() => {
  return '/api/questions'
})
</script>