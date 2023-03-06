<template>
  <div class="keyword-search-box">
    <BasicUi_input :placeholder="placeholder" :input="_keyword" @update:input="(input) => _keyword = input"
      @keypress.enter="f_search()" @keypress.esc="f_close()">
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
  },
  keyword: {
    type: String,
    default: null,
  }
})

const _data = ref(null)
const { keyword: p_keyword } = toRefs($props)
const _keyword = ref(null)
const isWideScreen = ref(false)

if (process.client) {
  window.addEventListener('resize', () => {
    console.log(window.innerWidth)
    const currWidth = window.matchMedia('(min-width: 768px)')

    console.log(window.matchMedia('(min-width: 768px)').matches)
    isWideScreen.value = currWidth.matches
  })
}

onMounted(async () => {
  _keyword.value = p_keyword.value
})

const $emit = defineEmits(['update:questions'])

const f_close = async (query = '/api/questions/search') => {
  const { data } = await useFetch(`${query}/all`)

  _data.value = data.value
  _keyword.value = null

  $emit('update:questions', { data: _data.value, keyword: _keyword.value })
}

const f_search = async (f_query = '/api/questions/search') => {
  const query = _keyword.value === null
    ? `${f_query}/all`
    : `${f_query}/${_keyword.value}`

  const { data } = await useFetch(query)

  _data.value = data.value

  $emit('update:questions', { data: _data.value, keyword: _keyword.value })
}

watch(p_keyword, (newVal) => {
  _keyword.value = newVal
})

</script>

<style lang="scss" scoped>
.keyword-search-box {
  display: inline-block;
  width: 100%;
  max-width: 390px;
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