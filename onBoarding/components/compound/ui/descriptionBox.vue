<template>
  <span class="description-box">
    <BasicUi_description :class="{ description: _isShow }">
      <template v-if="_isShow" #external />
    </BasicUi_description>
    {{ description }}
  </span>
</template>

<script setup>
const $props = defineProps({
  description: {
    type: String,
    default: '추가 설명이 나오는 부분입니다.'
  }
})

const _isShow = ref(false)
const h_keyDown = (evt) => {
  evt.stopPropagation()

  switch (evt.key) {
    case 'Shift':
      _isShow.value = true
      break
    default:
      _isShow.value = false
      break
  }
}

const h_keyUp = (evt) => {
  evt.stopPropagation()
  _isShow.value = false
}

onMounted(() => {
  window.addEventListener('keyup', h_keyUp)
  window.addEventListener('keydown', h_keyDown)
  window.addEventListener('onmouseleave', h_keyUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', h_keyUp, false)
  window.removeEventListener('keydown', h_keyDown, false)
  window.addEventListener('onmouseleave', h_keyUp, false)
})
</script>

<style lang="scss">
.description-box {
  position: relative;

  .description {
    padding: 0 5px;
    height: 40px;
    top: -50px;
    position: absolute;
    background-color: white;
    border: 1px solid lightgrey;
  }
}
</style>