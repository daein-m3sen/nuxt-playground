export default nuxt => {
  nuxt.vueApp.mixin({
    data () {
      return {
        _theme: this.$props.theme || inject('theme', ref('light'))
      }
    },
    methods: {
      changeMode() {
        this._theme === 'light' ? this._theme = 'dark' : this._theme = 'light'
      }
    },
    computed: {
      themes (val) {
        console.log('val', val)
        return defineTheme(this._theme)
      }
    }
  })
}
