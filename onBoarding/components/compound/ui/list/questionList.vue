<template>
  <slot>
    <CompoundUi_folding-box v-for="(question, idx) of questions" :key="idx" :postContent="question" />
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