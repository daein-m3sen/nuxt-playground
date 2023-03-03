<template>
  <div class="question-page">
    <CompoundUiDefault_header />

    <BasicUiWrapper_single-line class="main">
      <template #center>
        <section>
          <BasicUi_step-one-title class="title" :title="'자주하는 질문'" />
        </section>

        <section>
          <CompoundUi_keyword-search-box class="search" @update:questions="updateData">
            <template />
            <template #close="{ close }">
              <BasicUi_icon-button>
                <template #icon>
                  <div class="mdi mdi-close close-btn" @click="close(keywordSearchQuery)"></div>
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
              <CompoundUiList_tag-list class="tags" :tags="data" @update:questions="updateData" />
            </template>
          </CompoundData_tags>

          <div style="text-align: left">총 {{ count }}건</div>
          <hr>

          <!-- 데이터가 변경됨에 따라 내용이 달라져야함 -->
          <CompoundUiList_question-list :questions="datas" />

          <BasicUi_border-button class="more-btn" v-if="!count && count < 4" :content="`더보기 ${count} / ${count}`"
            @click="onClickMore" />
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
const count = computed(() => count.value = datas.value.length)
const router = useRouter()
const keywordSearchQuery = '/api/questions/search'
const datas = ref(null);
let currPage = 0
let pageSize = 1

const initData = async () => {
  const { data } = await useFetch('/api/questions')
  console.log(currPage, ((currPage + 1) * pageSize))

  datas.value = data.value.slice(currPage, ((currPage + 1) * pageSize))
}

const updateData = (newVal) => {
  currPage = 0
  pageSize = 1
  datas.value = newVal
}

const onClickMore = () => {
  if (count.value <= (currPage + 1) * pageSize) return

  currPage += 1
  console.log(datas.slice(currPage, ((currPage + 1) * pageSize)))
  // datas.value = datas.slice(currPage, ((currPage + 1) * pageSize))
}

await initData()
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