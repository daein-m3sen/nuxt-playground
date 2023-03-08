<template>
  <div>
    <CompoundUI-search_box @update:query="v => searchquery = v">
      <template #search>
        <slot name="search" />
      </template>
    </CompoundUI-search_box>
    <BasicData-fetch :query="searchquery" #="{ data }">
      <CompoundUI-search_result :data="data">
        <slot name="item" />
      </CompoundUI-search_result>
    </BasicData-fetch>
  </div>
</template>

<script setup>
const searchquery = ref('')
</script>
