import light from '~/theme/light'
import dark from '~/theme/dark'

const themes = {
  light,
  dark
}

export const defineTheme = (theme = 'light') => {
  return {
    theme,
    _target: themes[theme] || {}
  }
}
