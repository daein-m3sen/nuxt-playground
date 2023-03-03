<template>
  <div>
    <slot name="default">
      <BasicUi_tag v-for="(item, idx) of tags" :key="idx" :content="item" @click="search(item)" />
    </slot>
  </div>
</template>

<script setup>
const $props = defineProps({
  tags: {
    type: Array,
    default: [],
  }
})

const c_data = ref(null);
const search = async (keyword) => {
  const query = keyword === null
    ? `/api/questions/search/all`
    : `/api/questions/search/${keyword}`
  const { data } = await useFetch(query)

  c_data.value = data.value
  console.log(c_data.value, 'tag search result')
}

console.log()
</script>