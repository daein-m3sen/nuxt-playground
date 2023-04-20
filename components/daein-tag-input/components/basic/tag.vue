<template>
  <div class="tag" :class="`color-${p_color ? p_color : bgColor}`">
    <div class="tag">{{ p_tag ? p_tag : '새 태그' }}</div>
    <div v-if="p_icon" class="icon">
      <embed :src="`/assets/icons/${p_icon}.svg`">
    </div>
    <slot />
  </div>
</template>

<script setup>
const $props = defineProps({
  tag: {
    type: String,
    required: true,
    default: null,
  },
  color: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  }
})

const { tag: p_tag, color: p_color, icon: p_icon } = toRefs($props)
const bgColor = ref(null)

const setRandomColor = () => {
  if (p_color.value) return

  bgColor.value = parseInt((Math.random() * 10) + 1)
}

onMounted(() => {
  setRandomColor()
})
</script>

<style lang="scss" scoped>
.tag {
  text-align: center;
  display: inline-flex;
  padding: 1px 6px;
  line-height: 120%;
  margin: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 3px;

  & .icon {
    margin: 0 2px;
    flex-shrink: 0;

    & embed {
      height: 16px;
    }
  }
}
</style>