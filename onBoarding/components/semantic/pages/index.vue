<template>
  <div class="main-page">
    <CompoundUiLayout @change:theme="emit('change:theme')">
      <template #default>
        <div class="main">
          <section class="slogan-section">
            <strong><span class="slogan-1">SENS</span>ING</strong> <br>
            <strong><span class="slogan-2">THINK</span>ING</strong> <br>
            <strong><span class="slogan-3">CREAT</span>ING</strong> <br>
          </section>
          <br><br>
          <button class="qna-btn" @click="router.push('/question')">
            <strong>Q&A</strong>
          </button>
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

    color: v-bind('c__themes.defaultFontColor');

    & .qna-btn {
      padding: 5px 20px;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
    }

    & .slogan-section {
      font-size: 50px;
      letter-spacing: 0.25rem;
      // text-shadow: -0.1px 0 #000, 0 0.1px #000, 0.1px 0 #000, 0 -0.1px #000;
      color: v-bind('c__themes.theme.symbolDefault');

      & .slogan-1 {
        color: v-bind('c__themes.theme.symbolGreen');
      }

      & .slogan-2 {
        color: v-bind('c__themes.theme.symbolBlue');
      }

      & .slogan-3 {
        color: v-bind('c__themes.theme.symbolYellow');
      }
    }
  }
}
</style>