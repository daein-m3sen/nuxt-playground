<template>
  <h2>
    <slot name="title"></slot>
  </h2>
  <div>
    <slot name="item" :="item" v-for="item in sortedData"></slot>
  </div>
  <div>
    <slot name="footer"></slot>
  </div>
  <div v-if="$slots.pagenation">
    <slot name="pagenation" :page="pagenation" :totalPage="sdfds"></slot>
  </div>
</template>

<script setup>

if (!useSlot().pagenation) pagenation.value = null

const sortedData = computed(...data.filter(e => pagenation sort filter))


</script>