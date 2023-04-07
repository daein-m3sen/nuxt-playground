<template>
  <div class="icon-loading">
    <div class="icon-wrapper">
      <BasicUi-icon class="icon" :state="c_iconLoadingState?.icon" />
    </div>
    <Transition name="loading-wrapper">
      <div class="loading-wrapper" v-if="c_isShow">
        <BasicUi-loading class="loading" :type="p_type" :state="c_iconLoadingState?.progress" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { iconLoadingStates, iconLoadingState } from '../types/icon-loading-state';

const $props = defineProps({
  type: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: 'NONE',
  },
  percentage: {
    type: Number,
    default: 100,
  }
})

const { state: p_state, percentage: p_percentage, type: p_type } = toRefs($props)
const _iconHeight = ref('100%')

const c_isShow = computed(() => {
  return p_type.value !== 'NONE'
})
const c_polygonCalc = computed(() => {
  return (100 - p_percentage.value) + '%'
})
const c_iconLoadingState: iconLoadingState = computed(() => {
  return iconLoadingStates[p_state.value]
})

watch(p_type, () => {
  p_type.value === 'NONE' ? _iconHeight.value = '100%' : _iconHeight.value = '75%'
})
</script>

<style lang="scss" scoped>
.loading-wrapper-enter-active,
.loading-wrapper-leave-active {
  transition: all .5s linear;

}

.loading-wrapper-enter-active {
  transition-delay: .25s;
}

.loading-wrapper-enter-from,
.loading-wrapper-leave-to {
  scale: 0;
}

.icon-loading {
  & .icon-wrapper {
    width: 100%;
    height: v-bind(_iconHeight);
    transition: height .5s ease-in-out;

    & .icon {
      width: 100%;
      height: 100%;
      // clip-path: polygon(0 v-bind(c_polygonCalc), 100% v-bind(c_polygonCalc), 100% 100%, 0% 100%);
    }
  }

  & .loading-wrapper {
    height: 25%;

    & .loading {
      margin: 0 auto;
      height: 100%;
    }

    & .bar {
      margin: 0 0;
    }
  }
}
</style>