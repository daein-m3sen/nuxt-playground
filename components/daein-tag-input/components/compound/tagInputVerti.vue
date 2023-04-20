<template>
  <div class="tag-input-verti">
    <Wrapper-tags class="top">
      <template #tags>
        <Basic-tag v-for="(item, idx) of _tags" :key="idx" :tag="item.tag" :color="item.color" :icon="p_icon" />
      </template>
    </Wrapper-tags>
    <Wrapper-tags class="bottom">
      <template #input>
        <Basic-input :placeholder="'태그 선택 또는 만들기'" @select:related="(keyword) => filter(keyword)"
          @update:keyword="(keyword) => added(keyword)" />
      </template>
      <template #tags>
        <Compound-tag_list :tag="p_globalTags">
          <template #default>
            <div class="tag-list-inner" v-for="(item, idx) of p_globalTags" :key="idx">
              <Basic-tag :tag="item.tag" :color="item.color" />
              <Basic-icon :icon="'more_verti'" />
            </div>
          </template>
        </Compound-tag_list>
      </template>

      <Compound-tag_list :tag="_relatedTags">
        <template #default>
          <div class="tag-list-inner" v-for="(item, idx) of _relatedTags" :key="idx">
            <Basic-tag :tag="item.tag" :color="item.color" />
          </div>
        </template>
      </Compound-tag_list>
      <Compound-tag_list :tag="_newTag">
        <template #default>
          <div class="tag-list-inner" v-for="(item, idx) of _newTag" :key="idx">
            <Basic-tag :tag="item.tag" :color="item.color" />
            <div style="margin: auto 0 auto 10px;">생성</div>
          </div>
        </template>
      </Compound-tag_list>
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
    required: true,
    default: null,
  }
})

const _tags = ref([])
const _relatedTags = ref([])
const _newTag = ref()
const _newColor = ref(generateColor())
const { tags: p_tags, globalTags: p_globalTags, icon: p_icon } = toRefs($props)

const filter = (tag) => {
  _relatedTags.value = p_globalTags.value.filter(item => {
    if (item.tag.indexOf(tag.value) > -1 && tag.value) return item
  })

  if (tag.value) _newTag.value = [{ tag, color: _newColor }]
  else _newTag.value = null
}

const submit = () => {
  console.log('submit')
}

const added = (tag) => {
  _tags.value.push(tag)
  p_globalTags.value.push(tag)

  _newColor.value = generateColor()
}
</script>

<style lang="scss" scoped>
.tag-input-verti {
  height: 100%;

  & .top {
    max-height: 150px;
    overflow-y: auto;

  }

  & .bottom {
    height: 40%;
  }

  & .tag-list {
    & .tag-list-inner {
      display: flex;
      width: 100%;
      margin: 0 auto;
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