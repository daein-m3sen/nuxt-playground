<template>
  <div class="icon-animation-page">
    <button @click="$router.push('/')">home</button>
    <br><br>
    <h1>아이콘 애니메이션</h1>

    <br>
    <div class="grid-layout">
      <div v-for="(effect, idx) of ['BEAT', 'FADE', 'BEAT_FADE', 'BOUNCE', 'FLIP', 'SHAKE', 'SPIN', 'DRAW', 'NONE']"
        :key="idx">
        <div :class="`card-state-${idx + 1}`">
          <BasicUi-card>
            <BasicUi-icon class="icon" :animation="effect" />
          </BasicUi-card>
          <div style="margin: 5px 0;font-weight: 600;">
            {{ effect }}
          </div>
        </div>
      </div>
    </div>
    <br><br>
  </div>
</template>

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