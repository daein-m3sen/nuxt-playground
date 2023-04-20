<template>
  <BasicWrapper-md_container>
    <div class="main">
      <div class="left-side">
        <div class="menu">
          <button @click="$router.push('/icon')">
            <h3>아이콘</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/iconAnimation')">
            <h3>아이콘 애니메이션</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/iconState')">
            <h3>아이콘 상태</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/loading')">
            <h3>로딩바</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/progress')">
            <h3>프로그레스바</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/iconLoading')">
            <h3>아이콘과 로딩바</h3>
          </button>
        </div>
        <div class="menu">
          <button @click="$router.push('/iconProgress')">
            <h3>아이콘과 프로그레스바</h3>
          </button>
        </div>
      </div>
      <div class="right-side">
        <div class="menu">
          <button @click="$router.push('/playground')">
            <h3>플레이그라운드</h3>
          </button>
        </div>
      </div>
    </div>
  </BasicWrapper-md_container>
</template>

<script setup>
const $router = useRouter()
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  & .left-side {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-column: 1;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;

    & .menu {
      width: 100%;
      display: flex;
      flex-direction: column;

      &>button {
        flex: 0 1 auto;
        height: 100%;
        width: 100%;
      }
    }
  }

  & .right-side {
    & .menu {
      height: 100%;

      &>button {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>