const types = {
  black: {
    1000: 'black',
    500: 'rgba(0, 0, 0, .5)',
  },
  daein: {
    1000: 'rgba(46, 46, 46, 1)',
    700: 'rgba(46, 46, 46, 0.8)',
    500: 'rgba(46, 46, 46, 0.6)',

    opacityBackgroundColor: 'rgba(242, 243, 254, 1)', // #F2F3FE
    backgroundColor: 'white',
    borderStyle: ' 1px solid lightgrey',
    primaryBtnColor: 'rgba(0, 91, 254, 1)', // #005BFE
    iconColor: '#2e2e2e',
    tagColor: 'grey',
    emphaColor: '#5C8EFE',
    boxShadowPrimary: '0 0 0 2px #5C8EFE'
  }
}

export default {
  types,
  theme: types.daein,
  defaultBackground: '#FFFFFF',
  defaultFontColor: types.daein[700]
}
