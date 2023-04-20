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
  margin: auto 0;

  & embed {
    & svg {
      display: flex;
      align-items: center;
    }

    height: 16px;
  }
}
</style>