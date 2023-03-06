<template>
  <input class="input" type="text" :placeholder="placeholder" v-model="_input" @input="f_handleInput">
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
  },
})

const { input: p_input } = toRefs($props)
const _input = ref(null)
const $emit = defineEmits(['update:input'])
const f_handleInput = () => $emit('update:input', _input.value === '' ? null : _input.value)

watch(p_input, (newVal) => _input.value = newVal)
</script>

<style lang="scss" scoped>
.input {
  font-size: 14px;
  min-width: 220px;
}
</style>