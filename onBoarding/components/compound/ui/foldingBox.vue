<template>
  <div class="board-box">
    <div class="board-box-title" @click="f_onMoreBtnEvent">
      <BasicUi_icon-title class="title" :title="postContent.title" />
      <BasicUi_icon-button class="more-btn">
        <template v-slot:icon>
          <div v-if="!_moreSwitch" class="mdi mdi-chevron-down"></div>
          <div v-else class="mdi mdi-chevron-up"></div>
        </template>
      </BasicUi_icon-button>
    </div>
    <div v-if="_moreSwitch" class="board-box-content">
      <BasicUi_content :class="{ 'unfolding': !_fadeoutAni }" :content="postContent.content" />
    </div>
  </div>
</template>

<script setup>
const $props = defineProps({
  postContent: {
    type: Object
  },
  idx: {
    type: Number
  },
})

const _moreSwitch = ref(false)
const _fadeoutAni = ref(false)

const f_onMoreBtnEvent = () => {
  if (_moreSwitch.value) {
    _fadeoutAni.value = !_fadeoutAni.value

    setTimeout(() => {
      _moreSwitch.value = !_moreSwitch.value
    }, 500)
  } else {
    _fadeoutAni.value = !_fadeoutAni.value
    _moreSwitch.value = !_moreSwitch.value
  }
}

watch($props, () => {
  _moreSwitch.value = false
})
</script>

<style lang="scss" scoped>
.board-box {
  padding: 20px 0;
  border-bottom: 1px solid lightgrey;

  & .board-box-title {
    background-color: white;
    display: flex;
    animation: rotateX_unfolding .25s ease-in forwards;
    transform-origin: top center;

    & .title {
      width: calc(100% - 40px);
      margin-right: auto;
    }

    & .more-btn {
      margin-left: auto;
    }

    &:hover {
      cursor: pointer;
    }
  }

  & .board-box-content {
    display: block;
    padding: 0 45px;
    animation: rotateX_unfolding .5s ease-in forwards;
    transform-origin: top center;

    & .unfolding {
      animation: rotateX_folding .5s ease-in forwards;
      transform-origin: top center;
    }
  }
}

@keyframes rotateX_unfolding {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }

  50% {
    transform: rotateX(-20deg);
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

@keyframes rotateX_folding {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(-20deg);
  }

  100% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
}

@keyframes slide_up {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}

@keyframes slide_down {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>