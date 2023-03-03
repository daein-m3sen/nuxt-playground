<template>
  <header class="default-footer">
    <BasicUiWrapper_single-line #center>
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
    </BasicUiWrapper_single-line>
  </header>
</template>

<style lang="scss" scoped>
.default-footer {
  border-top: 1px solid lightgrey;
  background-color: white;

  & .logo {
    padding: 20px 30px;
  }

  & .description {
    padding: 20px 30px;
  }

  & .divide-line {
    border-bottom: 1px solid lightgrey;
  }
}
</style>