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
        // this.themes.theme = this._theme
      }
    },
    computed: {
      themes() {
        // console.log('changed showing mode')
        // console.log(this.themes)
        return defineTheme(this._theme)
      },
    }
  })
}
