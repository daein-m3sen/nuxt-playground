<template>
  <BasicData_fetch-apply :urls="urls" #data="search">
    <slot name="searchResult" :data="search.data" :keyword="keyword" />
  </BasicData_fetch-apply>
</template>

<script setup>
const $props = defineProps({
  urls: {
    type: String,
    default: '/api/questions'
  },
  keyword: {
    type: String,
    default: null,
  }
})
</script>
