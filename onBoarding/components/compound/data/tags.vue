<template>
  <BasicData_fetch-apply :urls="_urls" #data="tags">
    <slot name="tags" :data="tags.data" />
  </BasicData_fetch-apply>
</template>

<script setup>
const _urls = computed(() => {
  return '/api/tags'
})
</script>