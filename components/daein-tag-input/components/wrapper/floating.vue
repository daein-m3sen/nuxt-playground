<template>
  <div class="wrapper-floating">
    <slot name="default" />
    <div class="floating-item">
      <slot name="floatItem" :="{ isShow: _isShow }" />
    </div>
  </div>
</template>

<script setup>
const _isShow = ref(false)

</script>

<style lang="scss" scoped>
.wrapper-floating {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: visible;

  & .floating-item {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>