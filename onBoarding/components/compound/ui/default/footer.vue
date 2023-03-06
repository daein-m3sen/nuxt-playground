<template>
  <footer class="default-footer">
    <BasicUiWrapper_main :class="{ 'isWideScreen': isWideScreen }">
      <template #main class="footer-inner">
        <BasicUi_logo class="logo" />
        <div class="divide-line"></div>
        <div class="description">
          <div>
            서울특별시 강남구 테헤란로77길 13(삼성동) 창조빌딩 10층 <br>
            10F, Chang-jo building, 13, Teheran-ro 77-gil, Gangnam-gu, Seoul, Rep. of KOREA
          </div>
          <div>
            <small>@Copyright M3SEN co., Ltd. All rights reserved </small>
          </div>
        </div>
      </template>

    </BasicUiWrapper_main>
  </footer>
</template>

<script setup>
const isWideScreen = ref(true)

if (process.client) {
  window.addEventListener('resize', () => {
    const currWidth = window.matchMedia('(min-width: 410px)')
    isWideScreen.value = currWidth.matches
  })
}
</script>

<style lang="scss" scoped>
.isWideScreen {
  display: flex;
}

.default-footer {
  border-top: 1px solid lightgrey;
  background-color: white;

  & .logo {
    padding: 20px 30px;
    margin: auto;
  }

  & .description {
    padding: 20px 30px;
  }

  & .divide-line {
    border-bottom: 1px solid lightgrey;
  }

  & .footer-inner {
    display: block;
  }
}
</style>