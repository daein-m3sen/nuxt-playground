import { defineStore } from 'pinia'

export const useSiteCustomStore = defineStore('site', {
  state: () => {
    return { 
      theme: null,
    }
  },
  actions: {
    initSetting() {
      this.theme = ref('light')
    },
    getTheme() {
      return this.theme
    },
  }
})

export const useThemeManageStore = defineStore('theme', {
  state: () => {
    return {
      theme: 'light',
    }
  },
  actions: {
    initSetting() {
      this.theme = ref('light')
    },
    getTheme() {
      return this.theme
    },
    setTheme() {
      this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light'
    },
    setThemeByVal(theme) {
      this.theme = theme
    },
  }
})