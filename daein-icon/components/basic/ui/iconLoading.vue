<template>
  <div class="icon-loading">
    <div class="icon-wrapper">
      <!-- <BasicUi-icon class="icon-mask" :state="c_iconloadingState?.icon" :percentage="0" /> -->
      <BasicUi-icon class="icon" :state="c_iconLoadingState.icon" :percentage="50" />
    </div>
    <div class="loading-wrapper">
      <BasicUi-loading class="loading" :state="c_iconLoadingState.progress" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { iconLoadingStates, iconLoadingState } from '../types/icon-loading-state';

const $props = defineProps({
  state: {
    type: String,
    default: 'DISABLED',
  },
  percentage: {
    type: Number,
    default: 100,
  }
})

const { state: p_state, percentage: p_percentage } = toRefs($props)

const c_polygonCalc = computed(() => {
  return (100 - p_percentage.value) + '%'
})

const c_iconLoadingState = computed(() => {
  return iconLoadingStates[p_state.value]
})
</script>

<style lang="scss" scoped>
.icon-loading {
  & .icon-wrapper {
    width: 100%;
    height: calc(100% / 4 * 3);
    padding: 5px;
    // position: relative;

    & .icon {
      width: 100%;
      height: 100%;
      fill: lightcoral;
      clip-path: polygon(0 v-bind(c_polygonCalc), 100% v-bind(c_polygonCalc), 100% 100%, 0% 100%);
    }

    // & .icon-mask {
    //   color: lightcoral;
    //   opacity: 0.8;
    //   width: calc(100% - 10px);
    //   height: calc(100% - 10px);
    //   position: absolute;
    // }
  }

  & .loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% / 4);
    padding: 5px;

    & .loading {
      height: 100%;
    }
  }
}
</style>