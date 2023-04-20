<template>
  <div>
    <BasicWrapper-animation v-if="c_currentEffect" :class="c_currentEffect" :effects="p_effects"
      :currentIndex="p_currentIndex + 1">
      <slot />
    </BasicWrapper-animation>
    <slot v-else />
  </div>
</template>

<script setup>
const $props = defineProps({
  effects: {
    type: Array,
    required: true,
    default: [],
  },
  currentIndex: {
    type: Number,
    default: 0,
  }
})

const { effects: p_effects, currentIndex: p_currentIndex } = toRefs($props)
const c_currentEffect = computed(() => p_effects.value[p_currentIndex.value])
</script>

<style lang="scss" scoped>
@import "@/public/scss/icon_animations.scss";

.beat {
  animation: beat 1s ease-in-out infinite;
}

.fade {
  animation: fade 2s ease-in-out infinite;
}

.beat-fade {
  animation: beat-fade 1s ease-in-out infinite;
}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}

.flip {
  animation: flip 2s ease-in-out infinite;
}

.shake {
  animation: shake .25s ease-in-out infinite;
}

.spin {
  animation: spin 2s linear infinite;
}
</style>