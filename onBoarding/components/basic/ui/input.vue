<template>
  <input class="input" type="text" :placeholder="placeholder" v-model="input" @input="handleInput">
</template>

<script setup>
const $props = defineProps({
  input: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: '입력해주세요'
  }
})

const { input: p_input } = toRefs($props)
const input = ref(null)
const emit = defineEmits(['update:input'])
const handleInput = () => emit('update:input', input.value === '' ? null : input.value)

watch(p_input, (newVal) => input.value = newVal)
</script>

<style lang="scss" scoped>
.input {
  font-size: 14px;
  min-width: 250px;
}
</style>