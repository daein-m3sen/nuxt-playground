<template>
  <div class="tag-input-horiz">
    <Wrapper-tags class="left">
      <Basic-tag v-for="(item, idx) of _tags" :key="idx" :tag="item.tag" :icon="p_icon" />
    </Wrapper-tags>
    <Wrapper-tags class="right">
      <template #input>
        <Basic-input :placeholder="'태그 선택 또는 만들기'" />
      </template>
      <template #tags>
        <Compound-tag_list :tag="p_globalTags">
          <template #default>
            <div class="tag-list-inner" v-for="(item, idx) of p_globalTags">
              <Basic-tag :key="idx" :tag="item.tag" :color="item.color" />
              <Basic-icon :icon="'more_verti'" />
            </div>
          </template>
        </Compound-tag_list>
      </template>
    </Wrapper-tags>
  </div>
</template>

<script setup>
const $props = defineProps({
  tags: {
    type: Array,
    default: [],
  },
  globalTags: {
    type: Array,
    default: [],
  },
  icon: {
    type: String,
    default: 'close',
  }
})

const _tags = ref([])
const { tags: p_tags, globalTags: p_globalTags, icon: p_icon } = toRefs($props)

onMounted(() => {
  _tags.value = [...p_tags.value, ..._tags.value]
})

const submit = () => {
  console.log(submit)
}

const added = () => {

}
</script>

<style lang="scss" scoped>
.tag-input-horiz {
  width: 100%;
  display: flex;

  & .left {
    width: 60%;
  }

  & .right {
    width: 40%;
    padding: 10px 10px 10px 30px;

    & .right-inner {
      & .input {
        padding: 10px;
      }
    }
  }

  & .tag-list {
    & .tag-list-inner {
      display: flex;
      padding: 0 3px;

      &:hover {
        background-color: #E1E3E5;
      }

      & .icon {
        margin: 0 2px;
        margin-left: auto;
      }
    }
  }
}
</style>