<template>
  <WrapperContainer-md_container>
    <br><br><br><br><br>
    <div>
      <h1>Wrapper</h1> <button @click="_isShows[0] = !_isShows[0]">{{ _isShows[0] ? '접기' : '펼치기' }}</button>

      <div v-if="_isShows[0]" class="scaffold">
        <div>
          <h2>Wrapper tags (width: 200px)</h2>
          <Wrapper-tags class="card" style="width: 200px;">
            <template #tags>
              <Basic-tag v-for="(item, idx) of _globalTags" :key="idx" :tag="item.tag" :color="item.color" />
            </template>
          </Wrapper-tags>
        </div>

        <br>

        <div>
          <h2>Wrapper tags with input (width: 200px)</h2>
          <Wrapper-tags class="card" style="display: block;width: 200px;">
            <template #input>
              <Basic-input :placeholder="'태그 선택 또는 만들기'" style="padding: 10px;" />
            </template>
            <template #tags>
              <Basic-tag v-for="(item, idx) of _globalTags" :key="idx" :tag="item.tag" :color="item.color"
                :icon="'close'" />
            </template>
          </Wrapper-tags>
        </div>

        <br><br>
      </div>

      <hr>

      <h1>Basic</h1> <button @click="_isShows[1] = !_isShows[1]">{{ _isShows[1] ? '접기' : '펼치기' }}</button>

      <div v-if="_isShows[1]" class="scaffold">
        <div>
          <h2>Basic Tag</h2>
          <Basic-tag
            v-for="(item, idx) of Array(20).fill(0).map((v, i) => { return { tag: (i + 1), color: parseInt(Math.random() * 10) } })"
            :key="idx" :tag="item.tag" />
        </div>

        <br>

        <div>
          <h2>Basic Tag (added icon)</h2>
          <Basic-tag
            v-for="(item, idx) of Array(20).fill(0).map((v, i) => { return { tag: (i + 1), color: parseInt(Math.random() * 10) } })"
            :key="idx" :tag="item.tag" :icon="'close'" />
        </div>

        <br>

        <div>
          <h2>Basic input</h2>
          <Basic-input :placeholder="'태그 선택 또는 만들기'" />
        </div>

        <br><br>
      </div>

      <hr>

      <h1>Compound</h1> <button @click="_isShows[2] = !_isShows[2]">{{ _isShows[2] ? '접기' : '펼치기' }}</button>

      <div v-if="_isShows[2]" class="scaffold">
        <div>
          <h2>Compound tagInputVerti (width: 300px)</h2>
          <Compound-tag_input_verti class="card" :globalTags="_globalTags"
            :tags="Array(20).fill(0).map((v, i) => { return { tag: (i + 1), color: parseInt(Math.random() * 10) } })"
            style="width: 300px;" />
        </div>

        <br>

        <div>
          <h2>Compound tagInputHoriz</h2>
          <Compound-tag_input_horiz class="card" :globalTags="_globalTags"
            :tags="Array(20).fill(0).map((v, i) => { return { tag: (i + 1), color: parseInt(Math.random() * 10) } })" />
        </div>

        <br><br>
      </div>

      <hr>

      <h1>Playground <small>(Based on LocalStorage)</small></h1> <button @click="_isShows[3] = !_isShows[3]">{{
        _isShows[3] ?
        '접기' : '펼치기'
      }}</button>

      <br><br>

      <div v-if="_isShows[3]" class="scaffold">
        <div>
          <h2>Compound tagInputVerti (width: 300px)</h2>
          <Compound-tag_input_verti #="{ submit }" class="card" style="width: 300px;" :globalTags="_globalTags"
            :icon="'close'" />
        </div>
        <br><br>
      </div>
      <hr>
    </div>

    <br><br><br><br><br>
  </WrapperContainer-md_container>
</template>

<script setup>
const _isShows = ref([false, false, false, true])
const _globalTags = ref(null)
const _tags = ref([])

onMounted(() => {
  localStorage.setItem('tags', JSON.stringify([
    { tag: '기획', color: '2' },
    { tag: '기안', color: '5' },
    { tag: '개발', color: '1' },
    { tag: '완료', color: '4' },
    { tag: '삭제', color: '7' },
  ]))

  _globalTags.value = JSON.parse(localStorage.getItem('tags'))

  watch(_globalTags, () => {
    console.log('_globalTags 업데이트됨', _globalTags.value)
    localStorage.setItem('tags', JSON.stringify(_globalTags.value))
    _globalTags.value = JSON.parse(localStorage.get('tags'))
  })
})
</script>

<style lang="scss" scoped>
h1 {
  display: inline;
}

.card {
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
}

.scaffold {
  animation: .5s scaffold linear;
}

@keyframes scaffold {
  0% {
    opacity: 0;
    transform: translate3d(0, -5%, 0);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>