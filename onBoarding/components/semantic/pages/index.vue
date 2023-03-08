<template>
  <div class="main-page">
    <CompoundUiLayout>
      <template #default>
        <div class="main">
          <div>
            <span>메인페이지입니다.</span>
          </div>
          <button class="qna-btn" @click="router.push('/question')">Q&A</button>
        </div>
      </template>
    </CompoundUiLayout>
  </div>
</template>

<script setup>
const router = useRouter()
</script>

<style lang="scss">
.main-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  & .main {
    flex: 1 0 auto;
    padding: 40px;

    & .qna-btn {
      padding: 5px 20px;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
    }
  }
}
</style>