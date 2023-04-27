<template>
  <div class="icon">
    <img :src="`/assets/icons/${p_icon}.svg`" alt="">
  </div>
</template>

<script setup>
const $props = defineProps({
  icon: {
    type: String,
    required: true,
  }
})

const { icon: p_icon } = toRefs($props)
</script>

<style lang="scss">
.icon {
  img {
    height: 24px;
  }
}
</style>