<template>
  <slot name="default" :keyEvt="{ h_keyUp, h_keyDown }" />
</template>

<script setup>
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