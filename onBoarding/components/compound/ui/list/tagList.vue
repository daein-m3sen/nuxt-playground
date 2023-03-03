<template>
  <div>
    <slot name="default" :data="c_data">
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
const emit = defineEmits(['update:questions'])

const search = async (keyword) => {
  const query = keyword === null
    ? `/api/questions/search/all`
    : `/api/questions/search/${keyword}`
  const { data } = await useFetch(query)

  c_data.value = data.value
  emit('update:questions', c_data.value)
}
</script>