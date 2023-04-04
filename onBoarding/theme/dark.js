const types = {
  daein: {
    1000: 'rgba(227, 229, 231, 1)', // #E3E5E7
    700: 'rgba(227, 229, 231, 0.8)', // #E3E5E7
    500: 'rgba(227, 229, 231, 0.6)', // #E3E5E7
    300: 'rgba(227, 229, 231, 0.4)', // #E3E5E7

    opacityBackgroundColor: 'rgba(51, 51, 51, 1)', // #333333
    backgroundColor: 'rgba(36, 37, 39, 1)', // #242527
    borderStyle: ' 1px solid rgba(211, 211, 211, 1)', // #D3D3D3
    primaryBtnColor: 'rgba(36, 37, 39, 1)', // #005BFE
    iconColor: 'rgba(227, 229, 231, 1)', // #E3E5E7
    emphaColor: 'rgba(227, 229, 231, 1)', // #5C8EFE
    invertPercentage: 'invert(50%)',
    boxShadowPrimary: '0 0 0 2px rgba(227, 229, 231, 1)', // #E3E5E7
    symbolDefault: 'rgba(255, 255, 255, 1)', // #000000
    symbolBlue: 'rgba(0, 103, 190, 1)', // #0067BE
    symbolYellow: 'rgba(253, 193, 86, 1)', // #FDC156
    symbolGreen: 'rgb(182, 213, 35, 1)', // #B6D523
  }
}

export default {
  types,
  theme: types.daein,
  defaultBackground: 'rgba(36, 37, 39, 1)', // #242527
  defaultFontColor: types.daein[700]
}
