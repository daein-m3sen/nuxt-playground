<template>
  <div v-for="(menu, idx) of p_menus" :key="idx">
    <!-- <span>{{ menu.name }}</span><span>{{ menu.path }}</span>
    <Real-side_menus class="side-menus" v-if="Object.keys(menu).length === 1" :menus="menu" /> -->
  </div>
</template>

<script setup>
const $props = defineProps({
  menus: {
    type: Object,
    default: () => { return {} }
  }
})

const { menus: p_menus } = toRefs($props)

onMounted(() => {
  console.log(p_menus.value)
})
</script>

<style lang="scss">
.side-menus {
  margin-left: 10px;
}
</style>