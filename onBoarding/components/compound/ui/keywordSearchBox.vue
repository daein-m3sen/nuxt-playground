<template>
  <section class="keyword-search-box">
    <BasicUi_input :placeholder="placeholder" :input="_keyword" @update:input="(input) => _keyword = input"
      @keypress.enter="f_search()" @keydown.escape="f_close()">
      <slot />
    </BasicUi_input>

    <slot v-if="$slots.close" name="close" :="{ close: f_close }" />
    <slot v-if="$slots.search" name="search" :="{ search: f_search }" />
  </section>
</template>

<script setup>
import { useScreenStore } from "../../../stores"

const $props = defineProps({
  placeholder: {
    type: String,
    default: '궁금하신 점이 있다면 검색해 보세요',
  },
  keyword: {
    type: String,
    default: null,
  }
})

const _data = ref(null)
const { keyword: p_keyword } = toRefs($props)
const _keyword = ref(null)
const screentStore = useScreenStore()
const _isWideScreen = ref(false)

const $emit = defineEmits(['update:result'])

const f_close = async (query = '/api/questions/search') => {
  const { data } = await useFetch(`${query}/all`)

  _data.value = data.value
  _keyword.value = null

  $emit('update:result', { result: _data.value, keyword: _keyword.value })
}

const f_search = async (query = '/api/questions/search') => {
  const combine_query = _keyword.value === null
    ? `${query}/all`
    : `${query}/${_keyword.value}`

  const { data } = await useFetch(combine_query)

  _data.value = data.value

  $emit('update:result', { result: _data.value, keyword: _keyword.value })
}

watch(p_keyword, (newVal) => {
  _keyword.value = newVal
})

</script>

<style lang="scss" scoped>
.keyword-search-box {
  width: 100%;
  max-width: 400px;
  border: 1px solid lightgrey;
  border-radius: 2rem;
  padding: 5px 15px;
  margin: 0 auto;

  & input {
    width: calc(100% - 35px - 35px);
  }
}
</style>