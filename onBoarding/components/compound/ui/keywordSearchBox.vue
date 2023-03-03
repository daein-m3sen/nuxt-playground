<template>
  <div class="keyword-search-box">
    <BasicUi_input :placeholder="placeholder" :input="keyword" @update:input="(input) => keyword = input" @enter="search">
      <slot name="default" />
    </BasicUi_input>

    <slot v-if="$slots.close" name="close" :="{ close }" />
    <slot v-if="$slots.search" name="search" :="{ search }" />
  </div>
</template>

<script setup>
const $props = defineProps({
  placeholder: {
    type: String,
    default: '궁금하신 점이 있다면 검색해 보세요',
  }
})

const c_data = ref(null)
const keyword = ref(null)
const emit = defineEmits(['update:questions'])

const close = (f_query) => {
  keyword.value = null
  search(f_query)
}

const search = async (f_query) => {
  const query = keyword.value === null
    ? `${f_query}/all`
    : `${f_query}/${keyword.value}`
  const { data } = await useFetch(query)

  c_data.value = data.value

  emit('update:questions', c_data.value);
}
</script>

<style lang="scss" scoped>
.keyword-search-box {
  display: inline-block;
  width: 100%;
  max-width: 400px;
  border: 1px solid lightgrey;
  border-radius: 2rem;
  padding: 5px 15px;

  & .close-btn {
    color: lightgrey;
    font-size: 18px;
  }

  & .search-btn {
    font-size: 20px;
  }
}
</style>