<template>
  <span class="tag" @click="onClickTag"># {{ content }}</span>
</template>

<script setup>
const $props = defineProps({
  content: {
    type: String,
    default: '기본태그'
  }
})
</script>

<style lang="scss" scoped>
.tag {
  margin: 0 10px;
  font-size: 14px;
  color: v-bind('themes.current.theme.tagColor');

  &:hover {
    color: #91B6FF;
    text-decoration: underline #91B6FF;
    cursor: pointer;
  }
}
</style>