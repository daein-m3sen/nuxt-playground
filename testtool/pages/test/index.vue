<template>
  <NuxtLayout name="test">
    <div>
      현재 컴포넌트들
      <div v-for="(item, idx) of _components" :key="idx">
        {{ item }}
      </div>
      <!-- <Real-side_menues v-if="_components" :menus="_components" /> -->
    </div>
  </NuxtLayout>
</template>

<script setup>
import { io } from 'socket.io-client'

const _socket = ref(null)
const _imports = ref([])
const _components = ref([])


onMounted(() => {
  _socket.value = io('http://localhost:11000')

  _socket.value.on('imports:dirs', (data) => {
    _imports.value = data
  })

  _socket.value.on('components:dirs', (data) => {
    _components.value = data
  })
})
</script>