<template>
  <div>
    <Compound-list>
      <template v-for="(menu, key) in p_menus" :key="key">
        <Basic-icon_icon_title v-if="menu?.icon" :title="menu.name" :icon="menu?.icon" />
        <Basic-title_h3 v-else :content="menu.name" />
        <Basic-menu_side_menus class="side-menus" v-if="menu?.pages" :menus="menu.pages" />
      </template>
    </Compound-list>
  </div>
</template>

<script setup>
const $props = defineProps({
  menus: {
    type: Object,
    default: () => { return {} }
  }
})

const { menus: p_menus } = toRefs($props)
</script>

<style lang="scss">
.side-menus {
  margin-left: 10px;
}
</style>