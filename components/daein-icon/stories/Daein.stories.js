import Daein from './Daein.vue'

export default {
  title: 'test/Daein',
  component: Daein,
  argTypes: {
    animationName: {
      control: 'animation-name'
    }
  }
}

export const beat = {
  args: {
    name: 'beat'
  }
}

export const fade = {
  args: {
    name: 'fade'
  }
}