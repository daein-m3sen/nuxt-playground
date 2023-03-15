const types = {
  white: {
    1000: 'white',
    500: 'rgba(80, 80, 2, .8)',
    500: 'rgba(50, 50, 80, 0.6)',
    300: 'rgba(80, 80, 80, 0.4)',
  },

  daein: {
    1000: 'rgba(227, 229, 231, 1)',
    700: 'rgba(227, 229, 231, 0.8)',
    500: 'rgba(227, 229, 231, 0.6)',
    300: 'rgba(227, 229, 231, 0.4)',

    opacityBackgroundColor: 'rgba(51, 51, 51, 1)', // #333333
    backgroundColor: 'rgba(36, 37, 39, 1)', // #242527
    borderStyle: ' 1px solid lightgrey',
    primaryBtnColor: 'rgba(36, 37, 39, 1)', // #005BFE
    iconColor: 'rgba(227, 229, 231, 1)', // #E3E5E7
    emphaColor: 'rgba(227, 229, 231, 0.8)', // #5C8EFE
    invertPercentage: 'invert(50%)',
  }
}

export default {
  types,
  theme: types.daein,
  defaultBackground: 'rgba(36, 37, 39, 1)', // #242527
  defaultFontColor: types.daein[700]
}
