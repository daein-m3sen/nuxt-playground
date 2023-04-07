<template>
  <BasicWrapper-animation :effects="c_iconAnimation">
    <!-- <img class="icon" :class='`${c_iconState} ${c_iconAnimation}`' ref="iconRef" :src="p_path" alt=""> -->
    <svg class="icon" ref="iconRef" :class='`${c_iconState}`' width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M11.493 4.038a3.708 3.708 0 0 0-1.516.624c-.305.216-.795.736-.97 1.03a3.416 3.416 0 0 0-.113 3.368c.091.176.245.419.342.54l.212.266c.024.032-.057.117-.257.267a6.8 6.8 0 0 0-1.22 1.272 5.458 5.458 0 0 0-.751 4.615 5.512 5.512 0 0 0 3.76 3.76c1.508.436 3.691.192 5.541-.62.428-.188.959-.472.959-.513 0-.034-.913-1.613-.961-1.663-.02-.021-.223.057-.487.187-1.047.517-2.36.829-3.483.829a3.55 3.55 0 0 1-2.069-.641c-.254-.173-.686-.612-.875-.889-.611-.898-.765-2.136-.391-3.164a3.575 3.575 0 0 1 1.923-2.022c.156-.065 1.485-.441 2.954-.835 1.469-.395 2.679-.725 2.688-.735.018-.018-.475-1.863-.507-1.895-.011-.011-1.017.251-2.236.582-2.116.576-2.224.601-2.396.558-.417-.104-.77-.392-.987-.805-.104-.197-.113-.249-.113-.654 0-.424.005-.449.136-.69.165-.304.414-.542.717-.683.303-.141.834-.148 1.154-.016l.207.086.483-.837c.266-.46.483-.852.483-.872 0-.056-.535-.289-.854-.373-.325-.086-1.062-.127-1.373-.077" />
    </svg>
  </BasicWrapper-animation>
</template>

<script setup>
// vue transition으로 상태 변경
// 속성 합성 고려시 css transition으로

const $props = defineProps({
  name: {
    type: String,
    default: 'heart'
  },
  path: {
    type: String,
    default: '/assets/icons/ic16_alarm.svg'
  },
  state: {
    type: String,
    default: 'NONE'
  },
  animation: {
    type: [String, Array],
    default: 'NONE'
  },
  percentage: {
    type: Number,
    default: 100,
  }
})

const { name: p_name, path: p_path, state: p_state, animation: p_animation, percentage: p_percentage } = toRefs($props)
const _icon = ref(null)
const iconRef = ref(null)
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

const c_iconLen = computed(() => {
  let iconLen = 0

  if (iconRef.value?.hasChildNodes()) {
    iconLen = 0
    Array.from(iconRef.value.childNodes).map((item, idx) => {
      iconLen += item.getTotalLength()
    })
  }

  return iconLen
})
const c_polygonCalc = computed(() => {
  return (100 - p_percentage.value) + '%'
})

const c_iconState = computed(() => {
  return ICON_STATE[p_state?.value]
})

const c_iconAnimation = computed(() => {
  const animations = []

  if (p_animation.value.constructor === Array) return p_animation.value.map(animation => ICON_ANIMATION[animation])
  return [ICON_ANIMATION[p_animation?.value]]
})

// const loadIcon = async () => {
//   const { data } = await useFetch(`/assets/icons/${p_name.value}.json`)
//   const tmp_p_name = p_name.value
//   _icon.value = data.value ?? tmp_p_name
// }

const setAnimation = () => {
  // console.log(iconRef.value.style)
  iconRef.value.style.animationName = 'beat fade'
  iconRef.value.style.animationDuration = '1s 1s'
  p_animation.value.map((animation, idx) => {
    console.log(p_animation)
    iconRef.value.style.animationName = animation
    iconRef.value.style.animationDuration = '1s'
  })
}
</script>

<style lang="scss" scoped>
@import "@/public/scss/icon_animations.scss";

.icon {
  // background-color: black;
  fill: #495057;
  height: 100%;
  width: 100%;
  stroke-dasharray: v-bind(c_iconLen);
  stroke-dashoffset: v-bind(c_iconLen);
}

.multiple {
  animation-name: beat;
}

// ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']
.disabled {
  filter: grayscale(100%);
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

.normal {}

.draw {
  stroke-dasharray: v-bind(c_iconLen);
  stroke-dashoffset: v-bind(c_iconLen);
  animation: draw 2s linear infinite;
}

@keyframes draw {
  from {
    stroke-dashoffset: v-bind(c_iconLen);
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>