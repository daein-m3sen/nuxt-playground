<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useScreenStore } from '@/stores'

const screenStore = useScreenStore()

onBeforeMount(() => {
  screenStore.initScreen()
})

onBeforeUnmount(() => {
  screenStore.removeScreenEvt()
})
</script>

<style>
html,
body,
#__nuxt {
  overflow: auto;
  height: 100%;
  width: 100%;
}

.app {
  height: 100%;
}
</style>
