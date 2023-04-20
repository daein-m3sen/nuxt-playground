<template>
  <div class="wrapper-tags">
    <div v-if="$slots.input" class="input">
      <slot name="input" />
    </div>
    <div v-if="$slots.tags" class="tags">
      <slot name="tags" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.wrapper-tags {
  padding: 5px;

  & .input {
    padding: 5px;
  }

  & .tags {
    padding: 5px;
  }
}
</style>