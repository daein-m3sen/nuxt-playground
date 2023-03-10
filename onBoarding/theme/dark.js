const types = {
  white: {
    1000: 'white',
    500: 'rgba(80, 80, 2, .8)',
    500: 'rgba(50, 50, 80, 0.6)',
    300: 'rgba(80, 80, 80, 0.4)',
  },

  daein: {
    1000: 'rgba(80, 80, 80, 1)',
    700: 'rgba(80, 80, 80, 0.8)',
    500: 'rgba(80, 80, 80, 0.6)',
    300: 'rgba(80, 80, 80, 0.4)',

    titleColor: 'red',
    opacityBackgroundColor: 'red',
    lightBackgroundColor: 'white',
    borderStyle: ' 1px solid lightgrey',
    LargeButtonBackgroundColor: 'red',
    tagColor: 'red',
    blueEmphaColor: 'red',
  }
}

export default {
  types,
  titleColor: 'red',
  theme: types.daein,
  defaultBackground: 'black',
  defaultFontColor: types.daein[500]
}
