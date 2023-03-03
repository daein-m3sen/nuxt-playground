<template>
  <slot name="data" :data="c_data" />
  <slot name="error" :data="_error" />
</template>

<script setup>
const $props = defineProps({
  urls: {
    type: String,
    required: true,
  }
})

const _error = ref({})
const c_data = ref(null)
const getData = async () => {
  const { data } = await useFetch($props.urls)

  c_data.value = data.value
}
await getData()

</script>