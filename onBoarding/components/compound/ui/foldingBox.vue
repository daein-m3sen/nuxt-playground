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
      <BasicUi_content :content="postContent.content" />
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
  }
})
const _moreSwitch = ref(false)
const f_onMoreBtnEvent = () => {
  _moreSwitch.value = !_moreSwitch.value
}
</script>

<style lang="scss" scoped>
.board-box {
  padding: 20px 0;

  border-bottom: 1px solid lightgrey;

  & .board-box-title {
    display: flex;

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
  }
}
</style>