<template>
  <footer class="default-footer">
    <BasicUiWrapper-footer>
      <template #footer>
        <BasicUi-logo class="logo" />
        <div class="divide-line"></div>
        <div class="description">
          <BasicUi-description :link="'https://www.m3sen.com/'">
            <template #external />
          </BasicUi-description>
          <div>
            서울특별시 강남구 테헤란로77길 13(삼성동) 창조빌딩 10층 <br>
            10F, Chang-jo building, 13, Teheran-ro 77-gil, Gangnam-gu, Seoul, Rep. of KOREA
          </div>
          <div>
            <small>@Copyright M3SEN co., Ltd. All rights reserved </small>
          </div>
        </div>
      </template>
    </BasicUiWrapper-footer>
  </footer>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.default-footer {
  border-top: 1px solid lightgrey;
  color: v-bind('c__themes.defaultFontColor');
  background-color: v-bind('c__themes.defaultBackground');
  text-align: center;

  & .logo {
    padding: 20px 30px;
    margin: auto;
    flex-grow: 1;
    filter: v-bind('c__themes.theme.invertPercentage');
  }

  & .description {
    position: relative;
    padding: 20px 30px;
    text-align: left;
    flex-grow: 2;
  }

  & .divide-line {
    border-bottom: 1px solid lightgrey;
  }
}
</style>