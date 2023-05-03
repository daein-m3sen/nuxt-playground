<template>
  <div v-if="_rootName">
    <strong>📁 {{ _rootName }}</strong>
    <div v-for="(item, idx) of _items" :key="idx">
      <div style="border-left: 4px solid lightgrey;padding-left:10px">
        📄<span>{{ item.name }} (<small><span>{{ item.path }}</span></small>)</span>
        &nbsp;<button @click="$router.push(`/test_m3sen/${item.path}`)">미리보기</button>
      </div>
    </div>
    <div v-if="_childes">
      <div v-for="(child, idx) of _childes" :key="idx">
        <Menus-side_menues class="side-menus" :menues="child" />
      </div>
    </div>
  </div>
  <div v-else>
    <strong>메뉴가 존재하지 않습니다.</strong>
  </div>
</template>

<script setup>
const $props = defineProps({
  menues: {
    type: Object,
    default: () => { return {} }
  }
})

const { menues: p_menues } = toRefs($props)
const _rootName = ref(null)
const _items = ref(null)
const _childes = ref(null)
const $router = useRouter()

onMounted(() => {
  _rootName.value = Object.keys(p_menues.value)[0] || null
  _items.value = Object.values(p_menues.value)[0]?.item || null
  _childes.value = Object.values(p_menues.value)[0]?.child || null
})
</script>

<style lang="scss">
.side-menus {
  margin: 0 0 10px 20px;
}
</style>