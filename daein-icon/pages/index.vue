<template>
  <div class="index">
    <br>
    <h2>아이콘, 로딩, 프로그레스를 활용한 조합 컴포넌트 예시</h2>
    <br><br>
    <div class="grid-layout">
      <div class="menu">
        <button @click="router.push('/icons')">
          <h3>아이콘</h3>
        </button>
      </div>
      <div class="menu">
        <button @click="router.push('/loading')">
          <h3>로딩</h3>
        </button>
      </div>
      <div class="menu">
        <button @click="router.push('/iconLoading')">
          <h3>아이콘과 로딩</h3>
        </button>
      </div>
      <div class="menu">
        <button @click="router.push('/iconProgress')">
          <h3>아이콘과 프로그레스</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
.index {
  .grid-layout {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-column: 2;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    & .menu {
      text-align: center;
      width: 100%;

      & button {
        width: 90%;
        height: 300px;
      }
    }
  }
}
</style>