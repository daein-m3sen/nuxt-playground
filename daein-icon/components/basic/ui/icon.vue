<template>
  <svg class="icon" ref="iconRef" :class='`${c_iconState} ${c_iconAnimation}`' width="16" height="16"
    viewBox="0 96 960 960">
    <path
      d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z" />
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
    default: 'ENABLE'
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
  await loadIcon()
})

const { name: p_name, state: p_state, animation: p_animation, percentage: p_percentage } = toRefs($props)
const _icon = ref(null)
const iconRef = ref(null)
const c_iconLen = computed(() => {
  let iconLen = 0

  if (iconRef.value?.hasChildNodes()) {
    iconLen = 0
    Array.from(iconRef.value.childNodes).map((item, idx) => {
      iconLen += item.getTotalLength()
    })

    console.log(parseInt(iconLen))
  }

  return parseInt(iconLen)
})
const c_polygonCalc = computed(() => {
  return (100 - p_percentage.value) + '%'
})

const ICON_STATE = {
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
  'NONE': null,
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
  display: block;
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

// .progress {
//   background-image: linear-gradient(to bottom right, lightcoral, white);
//   color: transparent;
//   -webkit-background-clip: text;
//   background-size: 200% 200%;
//   animation: gradation 2s ease-in-out infinite;
// }

.progress {
  // stroke-dasharray: v-bind(c_iconLen);
  // stroke-dashoffset: v-bind(c_iconLen);
  animation: draw 3s ease-in-out infinite;
}

.not-ready {
  fill: #EBEAEA;
}

.gradation {
  background-image: linear-gradient(to bottom right, lightgrey, white);
  color: transparent;
  -webkit-background-clip: text;
  background-size: 200% 200%;
  animation: gradation 10s ease-in-out infinite;
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