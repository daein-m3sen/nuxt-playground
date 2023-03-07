<template>
  <span class="description-box">
    <BasicUi_description :link="link">
      <template #external />
    </BasicUi_description>
    {{ description }}
  </span>
</template>

<script setup>
const $props = defineProps({
  description: {
    type: String,
    default: '추가 설명이 나오는 부분입니다.'
  },
  link: {
    type: String
  }
})


</script>

<style lang="scss" scoped>
.description-box {
  display: inline-block;
  position: relative;
  margin: auto;
}
</style>