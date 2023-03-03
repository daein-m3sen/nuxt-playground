<template>
  <div class="question-page">
    <CompoundUiDefault_header />

    <BasicUiWrapper_single-line class="main">
      <template #center>
        <section>
          <BasicUi_step-one-title class="title" :title="'자주하는 질문'" />
        </section>

        <section>
          <CompoundUi_keyword-search-box class="search">
            <template />
            <template #close="{ close }">
              <BasicUi_icon-button>
                <template #icon>
                  <div class="mdi mdi-close close-btn" @click="close"></div>
                </template>
              </BasicUi_icon-button>
            </template>
            <template #search="{ search }">
              <BasicUi_icon-button>
                <template #icon>
                  <div class="mdi mdi-magnify magnify-btn" @click="search(keywordSearchQuery)"></div>
                </template>
              </BasicUi_icon-button>
            </template>
          </CompoundUi_keyword-search-box>
        </section>

        <section>
          <CompoundData_tags>
            <template #tags="{ data }">
              <CompoundUiList_tag-list class="tags" :tags="data" />
            </template>
          </CompoundData_tags>

          <div style="text-align: left">총 {{ count }}건</div>
          <hr>

          <CompoundData_questions>
            <template #questions="{ data }">
              <CompoundUiList_question-list :questions="data" />
            </template>
          </CompoundData_questions>

          <BasicUi_border-button class="more-btn" :content="`더보기 ${1} / ${count}`" />
        </section>
      </template>
    </BasicUiWrapper_single-line>
    <div class="inquire-sector">
      <CompoundUi_description-box class="inquire-description" :description="'문제 해결이 되지 않으셨다면 문의하기를 이용해주세요.'" />
      <BasicUi_normal-button class="inquire-btn" :content="'문의하기'" @click="router.push('/inquire')" />
    </div>
    <CompoundUiDefault_footer />
  </div>
</template>

<script setup>
const count = ref(0)
const router = useRouter()
const keywordSearchQuery = reactive('/api/questions/search')
const getDataLen = async () => {
  const { data } = await useFetch('/api/questions/count')

  count.value = data.value
}

const getData = async () => { }

await getDataLen()
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
    margin: 30px 0 0 0;
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