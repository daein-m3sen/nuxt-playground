<template>
  <div class="tag-input-horiz">
    <Wrapper-tags class="left">
      <template #tags v-if="p_tags.length">
        <Basic-tag v-for="(item, idx) of p_tags" :key="idx" :tag="item.tag" :color="item.color" :icon="p_icon"
          @click.stop="tagDelete(item.tag)" />
      </template>
      <template #tags v-else>
        <div class="empty">등록된 태그가 없습니다.</div>
      </template>
    </Wrapper-tags>
    <Wrapper-tags class="right">
      <template #input>
        <Basic-input :placeholder="'태그 선택 또는 만들기'" @select:related="(keyword) => filter(keyword)"
          @update:keyword="(keyword) => tagAdd(keyword)" />
      </template>
      <template #tags>
        <Compound-tag_list :tag="p_globalTags" v-if="!_newTag">
          <template #default>
            <div class="tag-list-inner" v-for="(item, idx) of p_globalTags" :key="idx" @click.stop="tagAdd(item)">
              <Basic-tag :tag="item.tag" :color="item.color" />
              <Basic-icon :icon="'close'" @click.stop="globalDelete(item.tag)" />
            </div>
          </template>
        </Compound-tag_list>
        <div v-else>
          <Compound-tag_list :tag="_relatedTags">
            <template #default>
              <div class="tag-list-inner" v-for="(item, idx) of _relatedTags" :key="idx" @click.stop="tagAdd(item)">
                <Basic-tag :tag="item.tag" :color="item.color" />
              </div>
            </template>
          </Compound-tag_list>
          <div class="new-tag" v-if="!_relatedTags.length" @click.stop="tagAdd(_newTag)">
            <Basic-tag :tag="_newTag.tag" :color="_newTag.color" />
            <div style="margin: auto 0 auto 10px;">생성</div>
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
    required: true,
    default: null,
  }
})

const _tags = ref([])
const _relatedTags = ref([])
const _newTag = ref(null)
const _newColor = ref(generateColor())
const _globalTags = ref([])
const { tags: p_tags, globalTags: p_globalTags, icon: p_icon } = toRefs($props)

const emit = defineEmits([
  'update:tags',
])

const filter = (tag) => {
  _relatedTags.value = p_globalTags.value.filter(item => {
    if (item.tag.indexOf(tag.value) > -1) return item
  })

  if (tag.value) _newTag.value = { tag: tag.value, color: _newColor }
  else _newTag.value = null
}

const tagAdd = (val) => {
  const isExist = p_tags.value.filter(item => val.tag === item.tag)
  if (isExist.length || !val.tag.trim()) return

  if (_newTag.value) {
    saveData('global', [val, ...p_globalTags.value])
  }

  saveData('tags', [val, ...p_tags.value])

  _newColor.value = generateColor()
  _newTag.value = null
  _tags.value = null
  _globalTags.value = null

  emit('update:tags')
}

const tagDelete = (tag) => {
  deleteData('tags', p_tags, tag)
}

const globalDelete = (tag) => {
  deleteData('global', p_globalTags, tag)
  deleteData('tags', p_tags, tag)
}

const saveData = (table, data) => {
  localStorage.setItem(table, JSON.stringify(data))
}

const deleteData = (table, data, target) => {
  const tmp_data = data.value.filter(item => item.tag !== target)
  localStorage.setItem(table, JSON.stringify(tmp_data))

  emit('update:tags')
}
</script>

<style lang="scss" scoped>
.tag-input-horiz {
  border-radius: 0.5rem;
  width: 100%;
  display: flex;

  & .left {
    width: 60%;
    min-width: 100px;
    background-color: #F8F9FA;

    & .empty {
      margin: auto 0;
    }
  }

  & .right {
    width: 40%;
    min-width: 200px;
    padding: 10px;

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
}
</style>