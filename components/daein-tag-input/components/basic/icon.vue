<template>
  <div class="icon">
    <embed :src="`/assets/icons/${p_icon}.svg`" />
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

<style lang="scss" scoped>
.icon {
  margin: auto 0 auto auto;
  display: flex;
  align-items: center;

  & embed {
    height: 16px;
  }
}
</style>