export default (nuxt) => {
  nuxt.vueApp.mixin({
    data() {
      return {
        __theme: this.$props.theme || inject('theme', ref('light'))
      }
    },
    computed: {
      c__themes() {
        return defineTheme(this.theme).current
      },
      // c__everyThemes() {
      //   return defineTheme()
      // }
    }
  })
}