<template>
  <div>
    <slot :data="_data">
      <BasicUi_tag v-for="(tag, idx) of tags" :key="idx" :content="tag" @click="f_search(tag)" />
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

const _data = ref(null)
const $emit = defineEmits(['update:result'])

const f_search = async (keyword) => {
  const query = keyword === null
    ? `/api/questions/search/all`
    : `/api/questions/search/${keyword}`
  const { data } = await useFetch(query)

  _data.value = data.value
  $emit('update:result', { result: _data.value, keyword })
}
</script>