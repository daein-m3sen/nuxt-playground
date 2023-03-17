<template>
  <div class="footer-wrapper" ref="r_footer">
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.footer-wrapper {
  & .footer {
    @media (max-width: 425px) {
      display: block;
    }

    display: flex;
  }

  // & .single {
  //   height: calc(100% - 60px - 60px);
  //   margin: 0 auto;
  //   text-align: center;
  // }

  // & .double {
  //   height: calc(100% - 60px - 60px);
  //   display: flex;

  //   & .left {
  //     margin: auto 0 auto auto;
  //     text-align: left;
  //   }

  //   & .right {
  //     margin: auto auto auto 0;
  //     text-align: right;
  //   }
  // }
}
</style>