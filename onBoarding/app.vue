<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useScreenStore } from '@/stores'

const screenStore = useScreenStore()
const isLoaded = ref(false)

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
  /* overflow: auto; */
  height: 100vh;
  width: 100vw;
}

.app {
  height: 100%;
  animation: fade_in .25s ease-in-out;
  background-color: v-bind('c__themes.theme.backgroundColor');
}

@keyframes fade_in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
