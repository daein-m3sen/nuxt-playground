<template>
  <div class="question-page">
    <CompoundUiDefault_header />

    <BasicUiWrapper_single-line class="main">
      <template #center>
        <section>
          <BasicUi_step-one-title class="title" :title="'자주하는 질문'" />
        </section>

        <section>
          <CompoundUi_keyword-search-box class="search" @update:questions="f_updateData">
            <template />
            <template #close="{ f_close: close }">
              <BasicUi_icon-button>
                <template #icon>
                  <div class="mdi mdi-close close-btn" @click="close(_keywordSearchQuery)"></div>
                </template>
              </BasicUi_icon-button>
            </template>
            <template #search="{ f_search: search }">
              <BasicUi_icon-button>
                <template #icon>
                  <div class="mdi mdi-magnify magnify-btn" @click="search(_keywordSearchQuery)"></div>
                </template>
              </BasicUi_icon-button>
            </template>
          </CompoundUi_keyword-search-box>
        </section>

        <section>
          <CompoundData_tags>
            <template #tags="{ data }">
              <CompoundUiList_tag-list class="tags" :tags="data" @update:questions="f_updateData" />
            </template>
          </CompoundData_tags>

          <div style="text-align: left">총 {{ _count }}건</div>
          <hr>

          <!-- 데이터가 변경됨에 따라 내용이 달라져야함 -->
          <CompoundUiList_question-list :questions="_datas" />

          <BasicUi_border-button v-if="_count && _count > (_currPage + 1) * _pageSize" class="more-btn"
            :content="`더보기 ${_count ? (_currPage + 1) * _pageSize : 0} / ${_count}`" @click="f_onClickMore" />
        </section>
      </template>
    </BasicUiWrapper_single-line>
    <div class="inquire-sector">
      <CompoundUi_description-box class="inquire-description" :description="'문제 해결이 되지 않으셨다면 문의하기를 이용해주세요.'" />
      <BasicUi_normal-button class="inquire-btn" :content="'문의하기'" @click="_router.push('/inquire')" />
    </div>
    <CompoundUiDefault_footer />
  </div>
</template>

<script setup>
const _count = ref(0)
const _router = useRouter()
const _keyword = ref(null)
const _keywordSearchQuery = '/api/questions/search'
const _datas = ref(null)
let _currPage = 0
let _pageSize = 1

const f_initData = async () => {
  const { data } = await useFetch('/api/questions')
  console.log(_currPage, ((_currPage + 1) * _pageSize))

  _count.value = data.value.length
  _datas.value = data.value.slice(_currPage, ((_currPage + 1) * _pageSize))
}

const f_updateData = (newVal) => {
  _currPage = 0
  _pageSize = 1

  _count.value = newVal.length
  _datas.value = newVal.slice(_currPage, ((_currPage + 1) * _pageSize))
}

const f_onClickMore = () => {
  console.log((_currPage + 1) * _pageSize)
  if (_count.value <= (_currPage + 1) * _pageSize) return

  _currPage += 1
  _datas.value = [..._datas.value, _datas.value.slice(_currPage, ((_currPage + 1) * _pageSize))]
}

await f_initData()
</script>

<style lang="scss" scoped>
.question-page {
  & .main {
    width: 80%;
    min-width: 500px;

    & .title {
      margin: 50px 0;
    }

    & .search {
      margin: 30px 0 0 0;
    }

    & .tags {
      margin: 30px 0;
      word-break: keep-all;
    }

    & .question-list {
      margin: 0 0 50px 0;
    }

    & .more-btn {
      margin: 30px 0;
    }
  }

  & .inquire-sector {
    padding: 20px 0;
    margin: 50px 0 0 0;
    text-align: center;
    width: 100%;
    background-color: #F2F3FE;

    & .inquire-description {
      padding: 0 30px;
      color: #5C8EFE;
    }
  }

  & .close-btn {
    color: lightgrey;
    font-size: 18px;
  }

  & .search-btn {
    font-size: 20px;
  }
}
</style>