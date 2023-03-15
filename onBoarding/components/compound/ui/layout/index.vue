<template>
  <div>
    <CHeader class="header" />
    <main class="main">
      <slot v-if="$slots.default" />
    </main>
    <CFooter class="footer" />
  </div>
</template>

<script setup>
import CHeader from './header.vue'
import CFooter from './footer.vue'
</script>

<style lang="scss" scoped>
.header {
  background-color: v-bind('c__themes.defaultBackground');
}

.main {
  background-color: v-bind('c__themes.defaultBackground');
}

.footer {
  background-color: v-bind('c__themes.defaultBackground');
}
</style>
