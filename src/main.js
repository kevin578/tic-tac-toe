import Vue from 'vue'
import App from './App.vue'



window.app = new Vue({
  el: '#app',
  render: h => h(App)
})

var vm = window.app;
