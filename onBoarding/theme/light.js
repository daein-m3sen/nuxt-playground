const types = {
  black: {
    1000: 'black',
    500: 'rgba(0, 0, 0, .5)',
  },
  daein: {
    1000: 'rgba(80, 80, 80, 1)',
    500: 'rgba(80, 80, 80, 0.1)',

    titleColor: '#505050',
    opacityBackgroundColor: '#F2F3FE',
    lightBackgroundColor: 'white',
    borderStyle: ' 1px solid lightgrey',
    LargeButtonBackgroundColor: '#005BFE',
    tagColor: 'grey',
    blueEmphaColor: '#5C8EFE',
  }
}

export default {
  types,
  theme: types.daein,
  defaultBackground: 'white',
  defaultFontColor: types.daein[500]
}
