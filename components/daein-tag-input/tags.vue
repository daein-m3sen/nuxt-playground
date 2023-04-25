<template>
  <div>
    <WrapperList :data="[{ name: 'a' }, { name: 'b' }]">
      <template #="{ name }">
        <div>{{ name }}</div>
      </template>
    </WrapperList>
  </div>
</template>