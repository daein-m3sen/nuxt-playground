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
    default: 80,
  }
})

const { state: p_state, type: p_type, percentage: p_percentage } = toRefs($props)

const TYPE = {
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
  width: 20px;
  height: inherit;
  min-width: 14px;
  min-height: 14px;
  background-color: lightgrey;
  animation: horizontalMove 2s infinite;
}

.dot {
  aspect-ratio: 1 / 1;
  height: inherit;
  min-width: 14px;
  min-height: 14px;
  background-color: lightgrey;
  border-radius: 50%;
  animation: dot 2s infinite;
}

.none {
  display: none;
}

@keyframes horizontalMove {
  0% {
    left: 0%;
  }

  50% {
    left: calc(100% - 14px);
  }

  100% {
    left: 0%;
  }
}

@keyframes blink {
  0% {
    transform: scale(1.0);
  }

  50% {
    transform: scale(0.3);
  }

  100% {
    transform: scale(1.0);
  }
}

@keyframes dot {
  0% {
    transform: scale(0.3 + v-bind(p_percentage * 0.7));
  }

  100% {
    transform: scale(1.0);
  }
}
</style>