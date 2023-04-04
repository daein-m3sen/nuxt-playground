<template>
  <div class="loading">
    <button @click="$router.push('/')">home</button>
    <br>
    <h2>타입 따른 로딩바</h2>
    <br>
    <div class="grid-layout">
      <div v-for="(type, idx) of ['CIRCLE', 'BAR', 'DOT']" :key="idx">
        <div :class="`card-type-${idx + 1}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-loading :type="type" />
            </template>
          </BasicUi-card>
          <div>
            상태값: {{ type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-column: 3;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
</style>