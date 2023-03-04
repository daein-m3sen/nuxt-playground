<template>
  <slot name="data" :data="_data" />
  <slot name="error" :data="_error" />
</template>

<script setup>
const $props = defineProps({
  urls: {
    type: String,
    required: true,
  }
})

const _error = ref(null)
const _data = ref(null)

const getData = async () => {
  const { data } = await useFetch($props.urls)

  _data.value = data.value
}
await getData()

</script>