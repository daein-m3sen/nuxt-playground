<template>
  <div class="question-page">
    <CompoundUiLayout>
      <template #default>
        <BasicUiWrapper_single-line class="main">
          <template #center>
            <section class="title-sector">
              <BasicUi_step-one-title class="title" :title="'자주하는 질문'" />
            </section>
            <CompoundUi-Search_area>
              <template #searchBox />
              <template #tagBox />
              <template #searchResultBox />
            </CompoundUi-Search_area>
          </template>
        </BasicUiWrapper_single-line>
        <div class="inquire-sector" :class="{ 'isWideScreen': _isWideScreen }">
          <CompoundUi_description-box class="inquire-description" :link="'https://www.m3sen.com/#aboutus'"
            :description="'문제 해결이 되지 않으셨다면 문의하기를 이용해주세요.'" />
          <BasicUi_normal-button class="inquire-btn" :content="'문의하기'" @click="_router.push('/inquire')" />
        </div>
      </template>
    </CompoundUiLayout>
  </div>
</template>

<script setup>
const _count = ref(0)
const _router = useRouter()
const _keyword = ref(null)
const _datas = ref([])
const _isWideScreen = ref(true)
let _currPage = 0
let _pageSize = 4

onMounted(() => {
  if (process.client) {
    _isWideScreen.value = window.matchMedia('(min-width: 425px)').matches

    window.addEventListener('resize', () => {
      const currWidth = window.matchMedia('(min-width: 425px)')

      _isWideScreen.value = currWidth.matches
    })
  }
})
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

    & .title-sector {
      & .title {
        color: v-bind('themes._target.theme.titleColor');
        margin: 50px 0;
      }
    }

    & .search-sector {
      & .search {
        margin: 30px auto 0 auto;
      }
    }

    & .question-sector {
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
  }

  & .inquire-sector {
    padding: 20px 0;
    margin: 50px 0 0 0;
    text-align: center;
    width: 100%;
    background-color: v-bind('themes._target.theme.opacityBackgroundColor');

    & .inquire-description {
      padding: 0 30px;
      color: v-bind('themes._target.theme.blueEmphaColor');
    }
  }

  & .close-btn {
    color: lightgrey;
  }

  & .isWideScreen {
    display: block;
    width: 100%;
  }
}
</style>