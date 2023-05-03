<template>
  <div>
    <Component :is="_currComponent" />
  </div>
</template>

<script setup>
const _currComponent = computed(() => {
  const path = params.path ? params.path.reduce((acc, item) => {
    if (item.toLowerCase() !== 'index') acc += item.charAt(0).toUpperCase() + item.slice(1)
    return acc
  }, '') : ''

  return path
})
const { params } = useRoute()
</script>