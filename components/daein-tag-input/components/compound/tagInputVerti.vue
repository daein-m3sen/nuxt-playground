<template>
  <div class="tag-input-verti">
    <Wrapper-tags class="top">
      <template #tags v-if="p_tags.length">
        <Basic-tag v-for="(item, idx) of p_tags" :key="idx" :tag="item.tag" :color="item.color" :icon="p_icon"
          @click.stop="f_tagDelete(item.tag)" />
      </template>
      <template #tags v-else>
        <div class="empty">등록된 태그가 없습니다.</div>
      </template>
    </Wrapper-tags>
    <Wrapper-tags class="bottom">
      <template #input>
        <Basic-input :placeholder="'태그 선택 또는 만들기'" @select:related="(keyword) => f_filter(keyword)"
          @update:keyword="(keyword) => f_tagAdd(keyword)" />
      </template>
      <template #tags>
        <Compound-tag_list :tag="p_globalTags" v-if="!_newTag">
          <template #default>
            <div class="tag-list-inner" v-for="(item, idx) of p_globalTags" :key="idx" @click.stop="f_tagAdd(item)">
              <Basic-tag :tag="item.tag" :color="item.color" />
              <Basic-icon :icon="'close'" @click.stop="f_globalDelete(item.tag)" />
            </div>
          </template>
        </Compound-tag_list>
        <div v-else>
          <Compound-tag_list :tag="_relatedTags">
            <template #default>
              <div class="tag-list-inner" v-for="(item, idx) of _relatedTags" :key="idx" @click.stop="f_tagAdd(item)">
                <Basic-tag :tag="item.tag" :color="item.color" />
              </div>
            </template>
          </Compound-tag_list>
          <div class="new-tag" v-if="!_isExist && _newTag.tag.trim()" @click.stop="f_tagAdd(_newTag)">
            <Basic-tag :tag="_newTag.tag" :color="_newColor" />
            <div style="margin: auto 0 auto 10px;">생성</div>
          </div>
          <div v-if="!_newTag.tag.trim() && _newTag.tag">
            <div>올바르지 않은 태그 이름입니다.</div>
          </div>
        </div>
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
    default: null,
  }
})

const _relatedTags = ref([])
const _newTag = ref(null)
const _newColor = ref(generateColor())
const _globalTags = ref([])
const _tags = ref([])
const _isExist = ref(null)

const { tags: p_tags, globalTags: p_globalTags, icon: p_icon } = toRefs($props)

const $emit = defineEmits([
  'update:tags',
])

const f_initInput = () => {
  _newColor.value = generateColor()
  _newTag.value = null
  _globalTags.value = null
  _isExist.value = false
}

const f_filter = (tag) => {
  _relatedTags.value = p_globalTags.value.filter(item => {
    if (item.tag.indexOf(tag.value) > -1) return item
  })

  _isExist.value = p_globalTags.value.reduce((acc, item) => {
    if (item.tag === tag.value) acc = true

    return acc
  }, false)

  _newTag.value = { tag: tag.value, color: _newColor.value }
}

const f_tagAdd = (val) => {
  val.color = _newColor.value

  const isExist = p_tags.value.filter(item => val.tag === item.tag)
  if (isExist.length || !val.tag.trim()) return

  if (_newTag.value) {
    f_saveData('global', [val, ...p_globalTags.value])
  }

  f_saveData('tags', [val, ...p_tags.value])

  f_initInput()

  $emit('update:tags')
}

const f_tagDelete = (tag) => {
  f_deleteData('tags', p_tags, tag)
}

const f_globalDelete = (tag) => {
  f_deleteData('global', p_globalTags, tag)
  f_deleteData('tags', p_tags, tag)
}

const f_saveData = (table, data) => {
  localStorage.setItem(table, JSON.stringify(data))
}

const f_deleteData = (table, data, target) => {
  const tmp_data = data.value.filter(item => item.tag !== target)
  localStorage.setItem(table, JSON.stringify(tmp_data))

  $emit('update:tags')
}
</script>

<style lang="scss" scoped>
.tag-input-verti {
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100%;

  & .top {
    border-radius: 0.5rem 0.5rem 0 0;
    max-height: 150px;
    overflow-y: auto;
    background-color: #F8F9FA;
  }

  & .bottom {
    border-radius: 0 0 0.5rem 0.5rem;
    height: 40%;
    max-height: 300px;
    overflow-y: auto;
    background-color: white;

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