<template>
  <div>
    <CHeader />
    <main>
      <slot v-if="$slots.default" />
    </main>
    <CFooter />
  </div>
</template>

<script setup>
import CHeader from './header.vue'
import CFooter from './footer.vue'
</script>
