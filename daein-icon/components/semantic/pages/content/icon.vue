<template>
  <div class="icon">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 종류</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(number, idx) of Array(30).fill().map((v, i) => i + 1)" :key="idx">
        <div :class="`card-state-${idx + 1}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-icon class="icon" :animation="effect" />
            </template>
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ number }}
          </div>
        </div>
      </div>
    </div>
    <br><br>

    <br><br>
  </div>
</template>

<script setup>
const $router = useRouter()
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