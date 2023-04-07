<template>
  <div class="icon">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 종류</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(icon, name) in icons" :key="name">
        <div :class="`card-state-${name}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-icon class="icon" :name="icon.name" :path="icon.path" />
            </template>
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ icon.name }}
          </div>
        </div>
      </div>
    </div>
    <br><br>

    <br><br>
  </div>
</template>

<script setup>
import Utils from '@/utils'

const $router = useRouter()
const icons = ref([])

onMounted(() => {
  icons.value = Utils.getIcons()
})
</script>

<style lang="scss" scoped>
button {
  margin: 3px;
  width: 100px;
  height: 50px;
}

.grid-layout {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-column: 4;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}
</style>