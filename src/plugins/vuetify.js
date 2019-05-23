import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#2196f3",
    secondary: "#8bc34a",
    accent: "#009688",
    error: "#f44336",
    warning: "#cddc39",
    info: "#673ab7",
    success: "#4caf50"
  }
})