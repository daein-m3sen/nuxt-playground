import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', {
  state: () => {
    return { 
      isMobile: false,
    }
  },
  actions: {
    resizeEvt() {
      const currWidth = window.matchMedia('(min-width: 425px)')
      this.isMobile = currWidth.matches
    },
    initScreen() {
      this.isMobile = window.matchMedia('(min-width: 425px)').matches

      window.addEventListener('resize', this.resizeEvt)
    },
    removeScreenEvt() {
      window.removeEventListener('resize', this.resizeEvt, false)
    }
  }
})