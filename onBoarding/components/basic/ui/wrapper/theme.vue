<template>
  <slot :theme="p_theme" />
</template>

<script setup>
const $props = defineProps({
  theme: {
    type: String,
    default: null
  }
})

const { theme: p_theme } = toRefs($props)
const i_theme = inject('theme', ref('light'))
const _theme = computed(() => (p_theme.value || p_theme) || (i_theme?.value || i_theme))

provide('theme', _theme)
</script>