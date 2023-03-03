<template>
  <span>
    <slot v-if="$slots.external" name="external">
      <a :href="link">{{ link }}</a>
    </slot>
  </span>
</template>

<script setup>
const $props = defineProps({
  link: {
    type: String,
    default: 'https://google.com'
  },
})
</script>