<template>
  <div class="tag-input">
    <Basic-tags class="left">
      <template #tags v-if="p_tags.length">
        <Basic-tag v-for="(item, idx) of p_tags" :key="idx" :tag="item.tag" :color="item.color" :icon="p_icon"
          @click.stop="f_tagDelete(item.tag)" />
      </template>
      <template #tags v-else>
        <div class="empty">등록된 태그가 없습니다.</div>
      </template>
    </Basic-tags>
    <Basic-tags class="right">
      <template #input>
        <Basic-input :placeholder="'태그 선택 또는 만들기'" :keyword="_keyword" @update:keyword="(keyword) => f_filter(keyword)"
          @submit:keyword="(keyword) => f_tagAdd(keyword)" />
      </template>
      <template #tags>
        <Wrapper-list :tag="p_globalTags" v-if="!_newTag">
          <template #default>
            <div class="tag-list-inner" v-for="(item, idx) of p_globalTags" :key="idx" @click.stop="f_tagAdd(item)">
              <Basic-tag :tag="item.tag" :color="item.color" />
              <Basic-icon :icon="'close'" @click.stop="f_globalDelete(item.tag)" />
            </div>
          </template>
        </Wrapper-list>
        <div v-else>
          <Wrapper-list :tag="_relatedTags">
            <template #default>
              <div class="tag-list-inner" v-for="(item, idx) of _relatedTags" :key="idx" @click.stop="f_tagAdd(item)">
                <Basic-tag :tag="item.tag" :color="item.color" />
              </div>
            </template>
          </Wrapper-list>
          <div class="new-tag" v-if="!_isExist && _newTag.tag.trim()" @click="f_tagAdd(_newTag)">
            <Basic-tag :tag="_newTag.tag" :color="_newTag.color" />
            <div style="margin: auto 0 auto 10px;">생성</div>
          </div>
          <div v-if="!_newTag.tag.trim() && _newTag.tag">
            <div>올바르지 않은 태그 이름입니다.</div>
          </div>
        </div>
      </template>
    </Basic-tags>
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
    default: null,
  }
})

const _relatedTags = ref([])
const _newTag = ref(null)
const _newColor = ref(generateColor())
const _isExist = ref(null)
const _keyword = ref(null)

const { tags: p_tags, globalTags: p_globalTags, icon: p_icon } = toRefs($props)

const $emit = defineEmits([
  'update:tags',
  'delete:tag',
])

const f_initInput = () => {
  _newColor.value = generateColor()
  _newTag.value = null
  _relatedTags.value = []
  _isExist.value = false
}

const f_filter = (tag) => {
  // 연관된 태그 필터링
  _relatedTags.value = p_globalTags.value.filter(item => {
    if (item.tag.indexOf(tag.value) > -1) return item
  })

  // 입력된 태그가 이미 존재하는지 체크
  _isExist.value = p_globalTags.value.reduce((acc, item) => {
    if (item.tag === tag.value) acc = true

    return acc
  }, false)

  // 매 입력마다 _newTag 변수에 업데이트
  _newTag.value = { tag: tag.value, color: _newColor.value }
}

const f_tagAdd = (addTag) => {
  // 입력 부분 체크
  const isExist = p_tags.value.filter(item => addTag.tag === item.tag)

  // 중복이거나 빈칸일 시 실행 안함
  if (isExist.length || !addTag.tag.trim()) {
    f_initInput()
    return
  }

  // 키워드 변수와 컬러 변수를 업데이트
  _keyword.value = addTag.tag
  if (!addTag.color) addTag.color = _newColor.value

  // 
  if (_newTag.value) {
    const globalTags = [addTag, ...p_globalTags.value]
    $emit('update:tags', { table: 'global', tags: globalTags })
  }

  // 태그 저장
  const tags = [addTag, ...p_tags.value]
  $emit('update:tags', { table: 'tags', tags })

  f_initInput()
}

const f_tagDelete = (tag) => {
  $emit('delete:tag', { table: 'tags', tag })
}

const f_globalDelete = (tag) => {
  $emit('delete:tag', { table: 'global', tag })
  $emit('delete:tag', { table: 'tags', tag })
}
</script>

<style lang="scss" scoped>
.tag-input {
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  display: flex;

  & .left {
    border-radius: 0.5rem 0 0 0.5rem;
    width: 60%;
    min-width: 100px;
    max-height: 300px;
    overflow-y: auto;
    background-color: #F8F9FA;

    & .empty {
      margin: auto 0;
    }
  }

  & .right {
    width: 40%;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;

    background-color: white;

    &::-webkit-scrollbar-thumb {
      border-radius: 0 0.5rem 0.5rem 0;
      border: 4px solid transparent;
      background-clip: padding-box;
    }

    & .right-inner {
      & .input {
        padding: 10px;
      }
    }

    & .new-tag {
      padding: 5px;
      display: flex;

      &:hover {
        background-color: #E1E3E5;
      }
    }
  }

  & .tag-list {
    & .tag-list-inner {
      display: flex;
      width: 100%;
      margin: 0 auto;
      padding: 0 3px;

      &:hover {
        cursor: pointer;
        background-color: #E1E3E5;
      }

      & .icon {
        margin: 0 2px;
        margin-left: auto;
      }
    }
  }

  & .tag:hover {
    cursor: pointer;
  }
}
</style>