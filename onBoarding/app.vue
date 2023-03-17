<template>
  <div class="app">
    <NuxtPage :theme="c_theme" />
  </div>
</template>

<script setup>
import { useThemeManageStore } from "./stores";
const useThemeManage = useThemeManageStore()

const c_theme = computed(() => {
  return useThemeManage.getTheme()
})

onMounted(() => {
  if (process.client) {
    let theme = localStorage.getItem('theme')

    if (theme) {
      useThemeManage.setThemeByVal(theme)
    }
  }
})
</script>

<style>
html,
body,
#__nuxt {
  /* overflow: auto; */
  height: 100%;
  width: 100%;
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
