export default nuxt => {
  nuxt.vueApp.mixin({
    data () {
      return {
        __theme: this.$props.theme || inject('theme', ref('light')),
        __local_theme: this.$props.theme || inject('theme', ref('light')),
      }
    },
    methods: {
      f__changeMode() {
        if (this.__local_theme) this.__local_theme === 'light' ? this.__local_theme = 'dark' : this.__local_theme = 'light'
        else this.__local_theme = this.__theme
      }
    },
    computed: {
      c__themes() {
        return defineTheme(this.__local_theme || this.__theme).current
      },
    },
  })
}
