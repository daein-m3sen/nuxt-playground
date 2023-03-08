const types = {
  white: {
    1000: 'white',
    500: 'rgba(255, 255, 0, .5)'
  },

  daein: {
    1000: 'rgba(80, 80, 80, 1)',
    500: 'rgba(80, 80, 80, 0.1)',

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
  theme: types.daein,
  defaultBackground: 'black',
  defaultFontColor: types.daein[500]
}
