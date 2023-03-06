import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => {
    return { counter: 0, pageSize: 1, pageNum: 1 }
  },
  actions: {
    increment() {
      this.count++
    },
    increasePageNum() {
      this.pageNum++

      return this.pageNum
    },
    decreasePageNum() {
      this.pageNum--

      return this.pageNum
    }
  }
})