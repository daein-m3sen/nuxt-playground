<template>
  <div>
    <slot name="searchBox">
      <CompoundData_search #searchResult="{ data, keyword }" :keyword="_keyword">
        <CompoundUi_keyword-search-box class="search" :keyword="keyword" @update:questions="f_updateData">
          <template />
          <template #close="{ close }">
            <BasicUi_icon-button>
              <template #icon>
                <div class="mdi mdi-close close-btn" @click="close()"></div>
              </template>
            </BasicUi_icon-button>
          </template>
          <template #search="{ search }">
            <BasicUi_icon-button>
              <template #icon>
                <div class="mdi mdi-magnify magnify-btn" @click="search()"></div>
              </template>
            </BasicUi_icon-button>
          </template>
        </CompoundUi_keyword-search-box>
      </CompoundData_search>
    </slot>
    <slot name="tagBox">
      <CompoundData_tags>
        <template #tags="{ data }">
          <CompoundUiList_tag-list class="tags" :tags="data" @update:questions="f_updateData" />
        </template>
      </CompoundData_tags>
    </slot>
    <div style="text-align: left">
      총 <strong style="color: #0099ff;">{{ _count }}</strong>건
      <!-- <small>
                    (현재 페이지: {{ _currPage + 1 }}, 페이지 사이즈: {{ _pageSize }})
                  </small> -->
    </div>
    <hr>
    <slot name="searchResultBox">
      <CompoundUiList_question-list :questions="_datas" />
    </slot>
  </div>
</template>

<script setup>
const _count = ref(0)
const _keyword = ref(null)
const _datas = ref([])
let _currPage = 0
let _pageSize = 4

const f_loadQuestion = async () => {
  const { data: questions } = await useFetch(`/api/questions?page=${_currPage + 1}&size=${_pageSize}`)

  _datas.value = [..._datas.value, ...questions.value]
}

const f_loadQuestionCount = async () => {
  const { data: count } = await useFetch('/api/questions/count')

  _count.value = count.value
}

const f_updateData = async (newVal) => {
  _currPage = 0
  _pageSize = 4

  _count.value = newVal.data.length
  _datas.value = newVal.data.slice(_currPage, ((_currPage + 1) * _pageSize))
  _keyword.value = newVal.keyword
}

const f_onClickMore = async () => {
  if (_count.value <= (_currPage + 1) * _pageSize) return

  _currPage += 1
  f_loadQuestion()
}

await f_loadQuestionCount()
await f_loadQuestion()
</script>