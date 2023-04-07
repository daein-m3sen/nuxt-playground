<template>
  <div>
    {{ p_effects }}
    {{ c_currentEffect }}
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