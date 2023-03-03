<template>
  <BasicData_fetch-apply :urls="urls" #data="tags">
    <slot name="tags" :data="tags.data" />
  </BasicData_fetch-apply>
</template>

<script setup>
const urls = computed(() => {
  return '/api/tags'
})
</script>