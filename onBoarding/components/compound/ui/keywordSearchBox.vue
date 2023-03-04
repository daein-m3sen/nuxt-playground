<template>
  <div class="keyword-search-box">
    <BasicUi_input :placeholder="placeholder" :input="_keyword" @update:input="(input) => _keyword = input"
      @enter="f_search">
      <slot />
    </BasicUi_input>

    <slot v-if="$slots.close" name="close" :="{ f_close }" />
    <slot v-if="$slots.search" name="search" :="{ f_search }" />
  </div>
</template>

<script setup>
const $props = defineProps({
  placeholder: {
    type: String,
    default: '궁금하신 점이 있다면 검색해 보세요',
  }
})

const _data = ref(null)
const _keyword = ref(null)
const $emit = defineEmits(['update:questions'])

const f_close = (query) => {
  _keyword.value = null
  f_search(query)
}

const f_search = async (f_query) => {
  const query = _keyword.value === null
    ? `${f_query}/all`
    : `${f_query}/${_keyword.value}`
  const { data } = await useFetch(query)

  _data.value = data.value

  $emit('update:questions', _data.value)
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