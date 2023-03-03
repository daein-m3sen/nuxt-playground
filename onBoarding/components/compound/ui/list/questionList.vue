<template>
  <slot name="default">
    <CompoundUi_folding-box v-for="(item, idx) of questions" :key="idx" :postContent=item />
  </slot>
</template>

<script setup>
const $props = defineProps({
  questions: {
    type: Array,
    default: [],
  }
})
</script>