<template>
  <svg class="icon" ref="iconRef" :class='`${c_iconState} ${c_iconAnimation}`' width="16" height="16" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
</template>

<script setup>
// vue transition으로 상태 변경
// 속성 합성 고려시 css transition으로

const $props = defineProps({
  name: {
    type: String,
    default: 'heart'
  },
  state: {
    type: String,
    default: 'NONE'
  },
  animation: {
    type: String,
    default: 'NONE'
  },
  percentage: {
    type: Number,
    default: 100,
  }
})

onMounted(async () => {
  // await loadIcon()
})

const { name: p_name, state: p_state, animation: p_animation, percentage: p_percentage } = toRefs($props)
const _icon = ref(null)
const $iconRef = ref(null)
const c_iconLen = computed(() => {
  let iconLen = 0

  if ($iconRef.value?.hasChildNodes()) {
    iconLen = 0
    Array.from($iconRef.value.childNodes).map((item, idx) => {
      iconLen += item.getTotalLength()
    })

    console.log(parseInt(iconLen))

  }
})
const c_polygonCalc = computed(() => {
  return (100 - p_percentage.value) + '%'
})

const ICON_STATE = {
  'NONE': 'none',
  'DISABLED': 'disabled', // 비활성화
  'ENABLE': 'enable', // 활성화
  'COMPLETED': 'completed', // 일반상태
  'PROGRESS': 'progress', // 전환(중) 상태
  'NOT_READY': 'not-ready'
}
const ICON_ANIMATION = {
  'BEAT': 'beat',
  'FADE': 'fade',
  'BEAT_FADE': 'beat-fade',
  'BOUNCE': 'bounce',
  'FLIP': 'flip',
  'SHAKE': 'shake',
  'SPIN': 'spin',
  'DRAW': 'draw',
  'NONE': 'normal',
}
const c_iconState = computed(() => {
  return ICON_STATE[p_state?.value]
})

const c_iconAnimation = computed(() => {
  return ICON_ANIMATION[p_animation?.value]
})

const loadIcon = async () => {
  const { data } = await useFetch(`/assets/icons/${p_name.value}.json`)
  const tmp_p_name = p_name.value
  _icon.value = data.value ?? tmp_p_name
}
</script>

<style lang="scss" scoped>
@import "@/public/scss/icon_animations.scss";

.icon {
  fill: #495057;
  height: 100%;
  width: 100%;
}

// ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']
.disabled {
  fill: #E0DFDF;
}

.enable {}

.completed {
  animation: shake .25s ease-out infinite;
}

.progress {
  animation: draw 3s ease-in-out infinite;
}

.not-ready {
  fill: #EBEAEA;
}

@keyframes draw {
  0% {
    stroke-dasharray: v-bind(c_iconLen);
    stroke-dashoffset: v-bind(c_iconLen);
  }

  100% {
    stroke-dashoffset: 0;
  }
}

.normal {}

.beat {
  animation: beat 1s ease-in-out infinite;
}

.fade {
  animation: fade 2s ease-in-out infinite;
}

.beat-fade {
  animation: beat-fade 1s ease-in-out infinite;
}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}

.flip {
  animation: flip 2s ease-in-out infinite;
}

.shake {
  animation: shake .25s ease-in-out infinite;
}

.spin {
  animation: spin 2s linear infinite;
}

.draw {
  stroke-dasharray: v-bind(c_iconLen);
  stroke-dashoffset: v-bind(c_iconLen);
  animation: draw 2s ease-in-out infinite;
}
</style>