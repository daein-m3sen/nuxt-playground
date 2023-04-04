<template>
  <div class="icons">
    <button @click="$router.push('/')">home</button>
    <br>
    <h2>효과에 따른 아이콘</h2>
    <br>

    <div class="grid-layout">
      <div v-for="(effect, idx) of ['BEAT', 'FADE', 'BEAT_FADE', 'BOUNCE', 'FLIP', 'SHAKE', 'SPIN', 'DRAW', 'NONE']"
        :key="idx">
        <div :class="`card-state-${idx + 1}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-icon class="icon" :animation="effect" />
            </template>
          </BasicUi-card>
          <div>
            상태값: {{ effect }}
          </div>
        </div>
      </div>
    </div>
    <br><br>

    <br>
    <h2>상태에 따른 아이콘</h2>
    <br>
    <div class="grid-layout">
      <div v-for="(state, idx) of ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']" :key="idx">
        <div :class="`card-state-${idx + 1}`">
          <BasicUi-card>
            <template #default>
              <BasicUi-icon class="icon" :state="state" />
            </template>
          </BasicUi-card>
          <div>
            상태값: {{ state }}
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
      <div>
        상태값: ({{ _state }})
      </div>
    </div>

    <br><br>

    <br>
    <button v-for="(state, idx) of ['DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']" :key="idx" @click="onClickBtn(state)">
      {{ state }}
    </button>

    <br><br>
  </div>
</template>

<script setup>
const $router = useRouter()
const _state = ref('ENABLE')

const onClickBtn = (state) => {
  _state.value = state
}
</script>

<style lang="scss" scoped>
button {
  margin: 0 3px;
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