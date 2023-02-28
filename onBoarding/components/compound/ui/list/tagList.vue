<template>
  <div>
    <BasicUi_tag v-for="(item, idx) of ['Security Monitoring', '회원가입', '가입비용', '회원정보 변경']" :key="idx" :content="item" />
  </div>
</template>