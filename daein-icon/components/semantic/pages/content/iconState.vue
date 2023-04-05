<template>
  <div class="icon-state">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 상태</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(state, idx) of ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']" :key="idx">
        <div :class="`card-state-${idx + 1}`">
          <BasicUi-card>
            <BasicUi-icon class="icon" :state="state" />
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ state }}
          </div>
        </div>
      </div>
    </div>
    <br><br>

    <div style="text-align: center;">
      <BasicUi-card>
        <template #default>
          <BasicUi-icon :name="'note-multiple-outline'" :state="_state" />
        </template>
      </BasicUi-card>
      <div style="margin: 5px 0;font-weight: 600;font-size: 30px;">
        {{ _state }}
      </div>
    </div>
    <br>
    <button v-for="(state, idx) of ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']" :key="idx" @click="onClickBtn(state)">
      {{ state }}
    </button>

    <br><br>
  </div>
</template>

<script setup>
const _state = ref('ENABLE')

const onClickBtn = (state) => {
  _state.value = state
}
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-column: 4;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}
</style>