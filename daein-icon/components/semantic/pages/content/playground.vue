<template>
  <div>
    <h2>아이콘과 상태, 로딩, 프로그레스바를 선택해서 체험 해볼 수 있는 공간</h2>
    <BasicWrapper-animation :effects="['1', '2', '3', '4']">
      Hello
    </BasicWrapper-animation>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 30px;
}

.icon {
  font-size: 120px;
}
</style>