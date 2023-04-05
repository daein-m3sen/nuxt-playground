<template>
  <Transition name="completed">
    <div class="loadingbar" v-if="c_isShow" :class="`${c_progressType} ${c_progressState}`"></div>
  </Transition>
</template>

<script setup>
const $props = defineProps({
  type: {
    type: String,
    default: 'BAR',
  },
  state: {
    type: String,
    default: 'NONE',
  },
})

const { state: p_state, type: p_type } = toRefs($props)

const TYPE = {
  'NONE': 'none',
  'CIRCLE': 'circle',
  'BAR': 'bar',
  'DOT': 'dot',
}
const STATE = {
  'NONE': 'none',
  'COMPLETED': 'completed',
  'PROGRESS': 'progress'
}

const c_isShow = computed(() => {
  return p_state.value === 'PROGRESS'
})

const c_progressState = computed(() => {
  return STATE[p_state.value]
})

const c_progressType = computed(() => {
  return TYPE[p_type.value]
})
</script>

<style lang="scss" scoped>
@import "@/public/scss/loading_animations.scss";

.completed-enter-active,
.completed-leave-active {
  transition: opacity 0.75s;
}

.completed-enter-from,
.completed-leave-to {
  opacity: 0;
}

.loadingbar {
  width: inherit;
  height: inherit;
  min-width: 14px;
  min-height: 14px;
}

.circle {
  aspect-ratio: 1 / 1;
  height: min(100%, 100%);
  min-width: 14px;
  min-height: 14px;
  border-radius: 50%;
  border: 3px solid lightcoral;
  border-top: 3px solid transparent;
  animation: spin 2s linear infinite;
}

.bar {
  position: relative;
  width: 20px;
  min-width: 14px;
  min-height: 14px;
  background-color: lightcoral;
  animation: horizontalMove 2s infinite;
}

.dot {
  aspect-ratio: 1 / 1;
  height: min(100%, 100%);
  min-width: 14px;
  min-height: 14px;
  background-color: lightcoral;
  border-radius: 50%;
  animation: beat 2s infinite;
}

.none {
  display: none;
}
</style>