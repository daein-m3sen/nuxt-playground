<template>
  <span class="description-box">
    <BasicUi_description :class="{ description: isShow }">
      <template v-if="isShow" #external />
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

const isShow = ref(false);
const keyDownEventListener = (evt) => {
  evt.stopPropagation()

  switch (evt.key) {
    case 'Shift':
      isShow.value = true
      break
    default:
      isShow.value = false
      break
  }
}

const keyUpEventListener = (evt) => {
  evt.stopPropagation()
  isShow.value = false
}

onMounted(() => {
  window.addEventListener('keyup', keyUpEventListener)
  window.addEventListener('keydown', keyDownEventListener)
  window.addEventListener('onmouseleave', keyUpEventListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', false)
  window.removeEventListener('keydown', false)
  window.addEventListener('onmouseleave', false)
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