const types = {
  daein: {
    1000: 'rgba(46, 46, 46, 1)', // #2E2E2E
    700: 'rgba(46, 46, 46, 0.8)', // #2E2E2E
    500: 'rgba(46, 46, 46, 0.6)', // #2E2E2E

    opacityBackgroundColor: 'rgba(242, 243, 254, 1)', // #F2F3FE
    backgroundColor: 'rgba(255, 255, 255, 1)', // #FFFFFF
    borderStyle: ' 1px solid rgba(211, 211, 211, 1)', // #D3D3D3
    primaryBtnColor: 'rgba(0, 91, 254, 1)', // #005BFE
    iconColor: 'rgba(46, 46, 46, 1)', // #2E2E2E
    tagColor: 'rgba(128, 128, 128, 1)', // #808080
    emphaColor: 'rgba(92, 142, 254, 1)', // #5C8EFE
    invertPercentage: 'invert(0%)',
    boxShadowPrimary: '0 0 0 2px rgba(92, 142, 254, 1)', // #5C8EFE
    symbolDefault: 'rgba(0, 0, 0, 1)', // #000000
    symbolBlue: 'rgba(0, 103, 190, 1)', // #006BE
    symbolYellow: 'rgba(253, 193, 86, 1)', // #FDC156
    symbolGreen: 'rgb(182, 213, 35, 1)', // #B6D523
  }
}

export default {
  types,
  theme: types.daein,
  defaultBackground: 'rgba(255, 255, 255, 1)', // #FFFFFF
  defaultFontColor: types.daein[700]
}
