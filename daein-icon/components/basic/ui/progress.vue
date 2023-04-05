<template>
  <Transition name="completed">
    <div class="progressbar" v-if="c_isShow" :class="`${c_progressType} ${c_progressState}`"></div>
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
    default: 'PROGRESS',
  },
  percentage: {
    type: Number,
    default: 0,
  },
})

const { state: p_state, type: p_type, percentage: p_percentage } = toRefs($props)

const TYPE = {
  'NONE': 'none',
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

const c_progress_decimal = computed(() => {
  return p_percentage.value / 100
})

const c_progress_percentage = computed(() => {
  return p_percentage.value + '%'
})
</script>

<style lang="scss" scoped>
.completed-enter-active,
.completed-leave-active {
  transition: opacity 0.75s;
}

.completed-enter-from,
.completed-leave-to {
  opacity: 0;
}

.progressbar {
  min-width: 14px;
  min-height: 14px;
}

.bar {
  position: relative;
  height: inherit;
  min-width: 14px;
  min-height: 14px;
  background-color: lightcoral;
  animation: horizontalMove 2s ease-in-out infinite;
  clip-path: polygon(0 0, v-bind(c_progress_percentage) 0, v-bind(c_progress_percentage) 100%, 0% 100%);
}

.dot {
  aspect-ratio: 1 / 1;
  height: inherit;
  width: inherit;
  min-width: 14px;
  min-height: 14px;
  background-color: lightcoral;
  border-radius: 50%;
  animation: dot 2s infinite;
}

.none {
  display: none;
}

.completed {
  display: none;
}

@keyframes horizontalMove {
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(0 0, v-bind(c_progress_percentage) 0, v-bind(c_progress_percentage) 100%, 0% 100%);
  }
}

@keyframes dot {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(v-bind(c_progress_decimal));
  }
}
</style>