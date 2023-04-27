<template>
  <div class="icon-title">
    <Basic-icon :icon="p_icon" />
    <Basic-title_h3 class="title" :content="p_title" />
  </div>
</template>

<script setup>
const $props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

const { icon: p_icon, title: p_title } = toRefs($props)
</script>

<style lang="scss">
.icon-title {
  display: flex;

  .icon {
    margin: auto 0;
  }

  .title {
    margin: auto 0;
  }
}
</style>