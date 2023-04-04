<template>
  <div class="icon-loading-page">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h3>상태 (흐름 예시)</h3> ({{ _state }}) <button @click="onChangeState">다시실행</button>

    <br>
    <div class="outer-block">
      <BasicUi-icon-loading class="icon-loading" :state="_state" />
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
const _state = ref('ENABLE')
const _isDuplicate = ref(false)

const onChangeState = () => {
  if (_isDuplicate.value) return
  console.log('아이콘 상태 버튼 실행')

  _isDuplicate.value = true

  _state.value = 'PROGRESS'
  // setTimeout(() => {
  //   _tmpState.value = 'DISABLED'
  //   setTimeout(() => {
  //     _tmpState.value = 'LOADING'
  //     setTimeout(() => {
  //       _tmpState.value = 'PROGRESS'
  //       setTimeout(() => {
  //         _tmpState.value = 'COMPLETED'
  //         _isDuplicate.value = false
  //       }, 5000)
  //     }, 5000)
  //   }, 3000)
  // })
}

onChangeState()
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
  font-size: 70px;
}
</style>