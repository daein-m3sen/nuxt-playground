<template>
  <div>
    <CHeader @click="$router.push('/')" />
    <slot v-if="$slots.default" />
    <CFooter />
  </div>
</template>

<script setup>
import CHeader from './header.vue'
import CFooter from './footer.vue'
</script>
