import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', {
  state: () => {
    return { 
      isMobile: false,
    }
  },
  actions: {
    initScreen() {
      this.isMobile = window.matchMedia('(min-width: 425px)').matches

      window.addEventListener('resize', () => {
        const currWidth = window.matchMedia('(min-width: 425px)')
        this.isMobile = currWidth.matches
      })
    },
    removeScreenEvt() {
      window.removeEventListener('resize', false)
    }
  }
})