<template>
  <div class="main-wrapper" ref="r_footer">
    <slot class="single" name="main" />
  </div>
</template>

<script setup>
const isWideScreen = ref(false)
let mediaQuery = null

if (process.client) {
  mediaQuery = window.matchMedia('(min-width: 768px)')

  watch(() => {
    console.log(mediaQuery, isWideScreen)
    isWideScreen.value = mediaQuery.matches
  })
}
</script>

<style lang="scss">
.main-wrapper {
  & .single {
    height: calc(100% - 60px - 60px);
    margin: 0 auto;
    text-align: center;
  }

  & .double {
    height: calc(100% - 60px - 60px);
    display: flex;

    & .left {
      margin: auto 0 auto auto;
      text-align: left;
    }

    & .right {
      margin: auto auto auto 0;
      text-align: right;
    }
  }
}
</style>