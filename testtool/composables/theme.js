import light from '@/theme/light'
import dark from '@/theme/dark'
import blue from '@/theme/blue'

const themes = {
  light,
  dark,
  blue,
}

export const defineTheme = (theme = 'light') => {
  return {
    theme,
    current: themes[theme] || {}
  }
}