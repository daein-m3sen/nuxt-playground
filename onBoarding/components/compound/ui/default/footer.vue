<template>
  <footer class="default-footer">
    <BasicUiWrapper_main :class="{ 'isWideScreen': _isWideScreen }">
      <template #main>
        <BasicUi_logo class="logo" />
        <div class="divide-line"></div>
        <div class="description">
          <BasicUi_description #external :link="'https://www.m3sen.com/'" />
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
const _isWideScreen = ref(false)

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
.isWideScreen {
  display: flex;
}

.default-footer {
  border-top: 1px solid lightgrey;
  background-color: white;
  text-align: center;

  & .logo {
    padding: 20px 30px;
    margin: auto;
    flex-grow: 1;
  }

  & .description {
    padding: 20px 30px;
    text-align: left;
    flex-grow: 2;
  }

  & .divide-line {
    border-bottom: 1px solid lightgrey;
  }
}
</style>