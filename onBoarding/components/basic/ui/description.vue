<template>
  <slot v-if="$slots.external" name="external">
    <span v-if="_isShow" class="description">
      <a class="link" :href="link">{{ link }}</a>
    </span>
  </slot>
</template>

<script setup>
const $props = defineProps({
  link: {
    type: String,
    default: 'https://google.com'
  },
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

<style lang="scss" scoped>
.description {
  top: -50px;
  padding: 10px;
  position: absolute;
  background-color: v-bind('c__themes.theme.backgroundColor');
  border: v-bind('c__themes.theme.borderStyle');
  border-radius: 0.25rem;
  animation: rotateY_unfolding .5s ease-in forwards;
  transform-origin: top left;

  & .link {
    color: v-bind('c__themes.defaultFontColor');
  }
}

@keyframes rotateY_unfolding {
  0% {
    opacity: 0;
    transform: rotateY(-90deg);
  }

  50% {
    transform: rotateY(-20deg);
  }

  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

@keyframes rotateY_folding {
  0% {
    opacity: 1;
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(-20deg);
  }

  100% {
    opacity: 0;
    transform: rotateY(-90deg);
  }
}
</style>