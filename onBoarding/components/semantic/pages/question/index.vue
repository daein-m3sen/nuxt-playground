<template>
  <div class="question-page">
    <CompoundUiLayout class="layout" @change:theme="emit('change:theme')">
      <template #default>
        <BasicUiWrapper-single_line class="main">
          <template #center>
            <section class="title-section">
              <BasicUi-step_one_title class="title" :title="'자주하는 질문'" />
            </section>
            <section class="search-section">
              <CompoundUi-keyword_search_box class="search" :keyword="_keyword" @update:result="f_updateData">
                <template />
                <template #close="{ close }">
                  <BasicUi-icon_button class="is-mobile">
                    <template #icon>
                      <div class="mdi mdi-close close-btn" @click="close()"></div>
                    </template>
                  </BasicUi-icon_button>
                </template>
                <template #search="{ search }">
                  <BasicUi-icon_button class="is-mobile">
                    <template #icon>
                      <div class="mdi mdi-magnify magnify-btn" @click="search()"></div>
                    </template>
                  </BasicUi-icon_button>
                </template>
              </CompoundUi-keyword_search_box>
            </section>
            <section class="tag-section">
              <CompoundData-tags>
                <template #tags="{ result }">
                  <CompoundUiList-tag_list class="tags" :tags="result" @update:result="f_updateData" />
                </template>
              </CompoundData-tags>
            </section>
            <section class="content-section">
              <div style="text-align: left">
                총 <strong class="empha">{{ _count }}</strong>건
              </div>
              <hr>
              <CompoundUiList-question_list :questions="_datas" />
              <BasicUi-border_button v-if="_count > (_currPage + 1) * _pageSize" class="more-btn"
                :content="`더보기 ${_count ? (_currPage + 1) * _pageSize : 0} / ${_count}`" @click="f_onClickMore" />
              <BasicUi-icon_button v-else @click="f_scrollTop">
                <template #icon>
                  <div class="mdi upper-btn mdi-arrow-up-drop-circle-outline">
                    <span class="btn-title">위로</span>
                  </div>
                </template>
              </BasicUi-icon_button>
            </section>
          </template>
        </BasicUiWrapper-single_line>
        <section class="inquire-section">
          <CompoundUi-description_box class="inquire-description" :link="'https://www.m3sen.com/#aboutus'"
            :description="'문제 해결이 되지 않으셨다면 문의하기를 이용해주세요.'" />
          <BasicUi-normal_button class="inquire-btn" :content="'문의하기'" @click="_router.push('/inquire')" />
        </section>
      </template>
    </CompoundUiLayout>
  </div>
</template>

<script setup>
const _router = useRouter()
const _count = ref(0)
const _keyword = ref(null)
const _datas = ref([])
const _upperBtn = ref(null)

const emit = defineEmits(['change:theme'])

let _currPage = 0
let _pageSize = 3

const f_loadQuestion = async () => {
  const { data: questions } = await useFetch(`/api/questions?page=${_currPage + 1}&size=${_pageSize}`)

  _datas.value = [..._datas.value, ...questions.value].slice(0, _count.value)
}

const f_loadQuestionCount = async () => {
  const { data: count } = await useFetch('/api/questions/count')

  _count.value = count.value
}

const f_updateData = async (newVal) => {
  _currPage = 0
  _pageSize = 3

  _count.value = newVal.result.length
  _datas.value = newVal.result.slice(_currPage, ((_currPage + 1) * _pageSize))
  _keyword.value = newVal.keyword
}

const f_onClickMore = async () => {
  if (_count.value <= (_currPage + 1) * _pageSize) return

  _currPage += 1
  await f_loadQuestion()
}

const f_scrollTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

await f_loadQuestionCount()
await f_loadQuestion()
</script>

<style lang="scss" scoped>
.question-page {
  height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;

  & .main {
    flex: 1 0 auto;
    padding-top: 60px;
    width: 80%;

    & .title-section {
      margin: 40px 0;

      & .title {
        color: v-bind('c__themes.defaultFontColor');
        margin: 50px 0;
      }
    }

    & .search-section {
      margin: 30px 0 10px 0;

      & .is-mobile {
        @media (max-width: 425px) {
          display: none;
        }
      }
    }

    & .tag-section {
      margin: 10px 0 30px 0;
    }

    & .content-section {
      margin: 30px 0;
      color: v-bind('c__themes.defaultFontColor');

      & .more-btn {
        @media (max-width: 425px) {
          display: block;
          width: 100%;
        }

        margin: 50px 0 20px 0;
      }

      & .upper-btn {
        width: 100%;
        margin: 40px 0 20px 0;

        & .btn-title {
          display: block;
          font-size: 14px;
        }
      }

      & .empha {
        color: v-bind('c__themes.theme.emphaColor')
      }
    }
  }

  & .inquire-section {
    @media (max-width: 425px) {
      display: block;
      width: 100%;
    }

    padding: 20px 0;
    margin: 50px 0 0 0;
    text-align: center;
    width: 100%;
    background-color: v-bind('c__themes.theme.opacityBackgroundColor');

    & .inquire-btn {
      background-color: v-bind('c__themes.theme.primaryBtnColor');
    }

    & .inquire-description {
      padding: 0 30px;
      color: v-bind('c__themes.theme.emphaColor');
    }
  }


  & .isWideScreen {
    display: block;
    width: 100%;
  }
}
</style>