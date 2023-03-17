import { createPinia } from "pinia"
import { useSiteCustomStore } from "~~/stores"

export default nuxt => {
  nuxt.vueApp.mixin({
    data () {
      return {
        __theme: this.$props.theme || inject('theme', ref('light')),
        __local_theme: null,
        __site_custom_store: ref(null),
      }
    },
    methods: {
      f__changeTheme() {
        if (this.__local_theme) this.__local_theme === 'light' ? this.__local_theme = 'dark' : this.__local_theme = 'light'
        else this.__local_theme = 'dark'
      }
    },
    computed: {
      c__themes() {
        return defineTheme(this.__local_theme || this.__theme).current
      },
      c__current_theme() {
        return this.__local_theme || this.__theme
      }
    },
  })
}
