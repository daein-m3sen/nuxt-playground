<template>
  <div class="playground">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h2>아이콘과 상태, 로딩, 프로그레스바를 선택해서 체험 해볼 수 있는 공간</h2>
    Effects: {{ ['beat', 'fade', 'shake', 'bounce', 'flip', 'spin'] }}
    <BasicWrapper-animation :effects="['beat', 'fade', 'shake', 'bounce', 'flip', 'spin']">
      <BasicUi-icon />
    </BasicWrapper-animation>
  </div>
</template>

<style lang="scss" scoped>
@import "@/public/scss/icon_animations.scss";

.title {
  font-size: 30px;
}

.icon {
  font-size: 120px;
}

.beat {
  animation: beat 1s ease-in-out infinite;
}

.fade {
  animation: fade 2s ease-in-out infinite;
}

.beat-fade {
  animation: beat-fade 1s ease-in-out infinite;
}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}

.flip {
  animation: flip 2s ease-in-out infinite;
}

.shake {
  animation: shake .25s ease-in-out infinite;
}

.spin {
  animation: spin 2s linear infinite;
}
</style>