<template>
  <div class="input">
    <input type="text" :placeholder="p_placeholder" @input="onSearch" :value="_keyword" @keydown.enter.prevent="onEnter">
    <slot />
  </div>
</template>

<script setup>
const $props = defineProps({
  keyword: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: '내용을 입력해주세요.'
  }
})

const emit = defineEmits([
  'update:keyword',
  'select:related',
])

const { keyword: p_keyword, placeholder: p_placeholder } = toRefs($props)
const _keyword = ref(null)

const onSearch = (evt) => {
  _keyword.value = evt.target.value
  emit('select:related', _keyword)
}

const onEnter = (evt) => {
  if (!_keyword?.value) return

  emit('update:keyword', {
    tag: _keyword.value,
    color: generateColor(),
  })

  _keyword.value = null
}

watch(p_keyword, (newVal) => _keyword = newVal.value)
</script>

<style lang="scss" scoped>
.input {
  & input {
    border: none;
    border-bottom: 1px solid lightgrey;
    background-color: inherit;
    outline: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
