<template>
  <div class="progress">
    <br>
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>프로그레스</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(type, idx) of ['BAR', 'DOT']" :key="idx">
        <div :class="`card card-type-${idx + 1}`">
          <BasicUi-card>
            <BasicUi-progress :type="type" :percentage="_percentage" />
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ type }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <strong style="font-size: 18px;">조절바</strong> <br>
      <input type="range" v-model="_percentage">
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
const _percentage = ref(50)
</script>

<style lang="scss" scoped>
.progress {
  height: 100%;

  .grid-layout {
    display: grid;
    column-gap: 20px;
    grid-column: 3;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }
}
</style>