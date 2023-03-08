<template>
  <div class="main-wrapper" ref="r_footer">
    <slot v-if="!_isWideScreen" class="single" name="main" />
    <slot v-else class="double" name="main">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </slot>
  </div>
</template>

<script setup>
const _isWideScreen = ref(false)

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