<template>
  <TestLayout>
    <div>
      <div v-for="(item, idx) of _components" :key="idx">
        <div v-if="item">
          <Menus-side_menues v-if="item" :menues="item" />
        </div>
      </div>
      <div v-for="(item, idx) of _imports" :key="idx">
        <div v-if="item">
          <Menus-side_menues v-if="item" :menues="item" />
        </div>
      </div>
    </div>
    <br>
    <div class="test-div">
      adasdadsaadssdasadsadsdas
    </div>
    <br>
    <div>
      디자인 시스템 변수 및 컬러 테마
      <pre class="code">
        {{ c__themes }}  
      </pre>
    </div>
    <br><br>
    <div>
      <h3>Preview</h3>
      <!-- <iframe :src="`http://localhost:3000/test_m3sen/preview/${params.path ? params.path.join('/') : ''}`"
        frameborder="1"></iframe> -->
      <Component :is="_currComponent" ref="currComponentRef" />
    </div>
    <br>
    <div v-if="_fileData">
      <h3>Code</h3>
      <div class="code" v-for="(template, idx) of _fileData.templateCode" :key="idx">
        template <br>
        <pre>
            {{ template ? template : '작성된 템플릿 코드가 없습니다.' }}
        </pre>
      </div>
      <br>
      <div class="code" v-for="(script, idx) of _fileData.scriptCode" :key="idx">
        script <br>
        <pre>
            {{ script ? script : '작성된 스크립트 코드가 없습니다.' }}
        </pre>
      </div>
      <br>
      <div class="code" v-for="(style, idx) of _fileData.styleCode" :key="idx">
        style <br>
        <pre>
            {{ style ? style : '작성된 스타일 코드가 없습니다.' }}
        </pre>
      </div>
      <br>
      <div>
        관계된 컴포넌트 <br>
        {{ _fileData.relativeCode ? _fileData.relativeCode : '관계된 컴포넌트가 없습니다.' }}
      </div>
    </div>
    <br>

    <br>
    <div>
      선택된 컴포넌트의 props <br>
      <pre class="code">
        {{ _propsData ? _propsData : '컴포넌트에 props가 없습니다.' }}
      </pre>
    </div>
    <br>
    <div>
      선택된 컴포넌트의 state (data) <br>
      <pre class="code">
        {{ _stateData ? _stateData : '컴포넌트에 state가 없습니다.' }}
      </pre>
    </div>
    <div>
      컴포넌트 별 스토리보드
    </div>
    <div>
      테마별 미리보기
    </div>
  </TestLayout>
</template>

<script setup>
import TestLayout from '@/modules/testtool/layout/default.vue'
import { io } from 'socket.io-client'

const $props = defineProps({
  test: {
    type: String,
    default: 'test',
  }
})

const currComponentRef = ref()
const _socket = ref()
const _imports = ref()
const _components = ref()
const _fileData = ref()
const _propsData = ref()
const _componentData = ref()
const _stateData = ref()
const _basePath = ref()
const _currComponent = computed(() => {
  const path = params.path ? params.path.slice(1).reduce((acc, item) => {
    if (item.toLowerCase() !== 'index') acc += item.charAt(0).toUpperCase() + item.slice(1)
    return acc
  }, '') : ''

  return path
})
const { params } = useRoute()

onMounted(() => {
  _socket.value = io('http://localhost:11000')

  _socket.value.on('imports:dirs', (data) => _imports.value = data)
  _socket.value.on('components:dirs', (data) => {
    _components.value = data.components
    _basePath.value = data.basePath

    _socket.value.emit('load:file', `${_basePath.value}/${params.path.join('/')}.vue`)
  })
  _socket.value.on('load:file', (data) => {
    _fileData.value = data
  })

  _socket.value.on('components:extend', (data) => {
    // _basePath.value = data
  })
})

onBeforeUnmount(() => {
  _socket.value.close()
})

watch(currComponentRef, (newVal) => {
  nextTick(() => {
    currComponentRef.value = newVal
    _propsData.value = currComponentRef.value.$?.propsOptions || null
    _componentData.value = currComponentRef.value.$?.data || null
    _stateData.value = currComponentRef.value.$?.setupState || null

    delete _stateData.value['$router']
    delete _stateData.value['listening']
    delete _stateData.value['options']
  })
})
</script>
<style lang="scss">
.code {
  background-color: #F1F3F5;
  border-radius: 0.5rem;
  padding: 30px;
}

.test-div {
  color: v-bind('c__themes.theme.defaultFontColor');
  background-color: v-bind('c__themes.theme.defaultBackground')
}
</style>