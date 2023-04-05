<template>
  <div class="icon-progress-page">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 & 프로그레스</h1>

    <br>
    {{ _state }} / {{ _type }} / {{ _percentage }}%
    <br><br>

    <div class="outer-block">
      <BasicUi-icon-progress class="icon-progress" :state="_state" :type="_type" :percentage="parseInt(_percentage)
      " />
    </div>
    <br>

    <strong style="font-size: 18px;">상태</strong>
    <div>
      <button :class="{ 'active': state === _state }" v-for="(state, idx) of ['NONE', 'COMPLETED', 'PROGRESS']"
        @click="f_onChangeState(state)" :key="idx">
        {{ state }}
      </button>
    </div>
    <br>

    <strong style="font-size: 18px;">종류</strong>
    <div>
      <button :class="{ 'active': type === _type }" v-for="(type, idx) of ['NONE', 'BAR', 'DOT']"
        @click="f_onChangeType(type)" :key="idx">
        {{ type }}
      </button>
    </div>
    <br>

    <strong style="font-size: 18px;">조절바</strong> <br>
    <input type="range" v-model="_percentage">
  </div>
</template>

<script setup>
const $router = useRouter()
const _state = ref('NONE')
const _type = ref('NONE')
const _percentage = ref(30)

const f_onChangeType = (type) => {
  _type.value = type
}

const f_onChangeState = (state) => {
  _state.value = state
}
</script>

<style lang="scss" scoped>
.outer-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  height: 300px;
}

.icon-progress {
  width: 100%;
  height: 100%;
  font-size: 70px;
}

.active {
  background-color: lightslategray;
  color: white;
}
</style>