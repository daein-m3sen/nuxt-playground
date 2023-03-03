<template>
  <div class="keyword-search-box">
    <BasicUi_input v-if="$slots.default" :placeholder="placeholder" :keyword="keyword">
      <slot name="default" />
    </BasicUi_input>

    <slot name="close" :="{ close }" />
    <slot name="search" />
  </div>
</template>

<script setup>
const $props = defineProps({
  keyword: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '궁금하신 점이 있다면 검색해 보세요'
  }
})
const p_keyword = toRefs($props)

const close = () => {
  p_keyword.value = ''
}
</script>

<style lang="scss" scoped>
.keyword-search-box {
  display: inline-block;
  width: 100%;
  max-width: 400px;
  border: 1px solid lightgrey;
  border-radius: 2rem;
  padding: 5px 15px;

  & .close-btn {
    color: lightgrey;
    font-size: 18px;
  }

  & .search-btn {
    font-size: 20px;
  }
}
</style>