<template>
  <div class="icon-loading-page">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 & 로딩</h1>

    <br>
    {{ _state }} / {{ _type }}
    <br><br>

    <div class="outer-block">
      <BasicUi-icon-loading class="icon-loading" :type="_type" :state="_state" />
    </div>
    <br>

    <strong style="font-size: 18px;">상태</strong>
    <div>
      <button :class="{ 'active': state === _state }"
        v-for="(state, idx) of ['NONE', 'DISABLED', 'ENABLE', 'COMPLETED', 'PROGRESS']" @click="f_onChangeState(state)"
        :key="idx">
        {{ state ? state : 'NONE' }}
      </button>
    </div>
    <br>

    <strong style="font-size: 18px;">종류</strong>
    <div>
      <button :class="{ 'active': type === _type }" v-for="(type, idx) of ['NONE', 'BAR', 'DOT', 'CIRCLE']"
        @click="f_onChangeType(type)" :key="idx">
        {{ type }}
      </button>
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
const _state = ref('NONE')
const _type = ref('NONE')

const f_onChangeState = (state) => {
  _state.value = state
}

const f_onChangeType = (type) => {
  _type.value = type
}
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

.outer-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  height: 300px;
}

.icon-loading {
  width: 100%;
  height: 100%;
}

.active {
  background-color: lightslategray;
  color: white;
}
</style>