<template>
  <div class="question-page">
    <CompoundUiDefault_header />

    <BasicUiWrapper_single-line class="main">
      <template v-slot:center>
        <BasicUi_step-one-title class="title" :title="'자주하는 질문'" />
        <CompoundUi_keyword-search-box class="search">
          <template #default />
          <template #close="{ close }">
            <span @click="close">close</span>
          </template>
          <template #search="{ search }">

            <span @click="search">검색하기</span>

            <CompoundUi_confirm @confirm="search">
              <template #="{ open }">
                <span @click="open">검색하기</span>
              </template>
              <template #modal="{ confirm, close }">
                <div>Hello this is modal</div>
                <button @click="confirm">confirm</button>
                <button @click="close">close</button>
              </template>
            </CompoundUi_confirm>

          </template>
        </CompoundUi_keyword-search-box>
        <CompoundUiList_tag-list class="tags" />
        <div class="list-title">
          <div style="text-align: left">총 10건</div>
          <hr>
        </div>
        <CompoundUiList_question-list />
        <BasicUi_border-button class="more-btn" :content="'더보기 3 / 10'" />
      </template>
    </BasicUiWrapper_single-line>
    <div class="inquire-sector">
      <CompoundUi_inquire-box />
      <BasicUi_normal-button class="inquire-btn" :content="'문의하기'" />
    </div>

    <CompoundUiDefault_footer />
  </div>
</template>

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
  }
}
</style>