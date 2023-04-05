<template>
  <div class="loading">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>로딩바</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(type, idx) of ['CIRCLE', 'BAR', 'DOT']" :key="idx">
        <div :class="`card card-type-${idx + 1}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-loading :state="'PROGRESS'" :type="type" />
            </template>
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
const _type = ref('PROGRESS')
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