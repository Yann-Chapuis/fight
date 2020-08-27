import Vue from 'vue'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/style/simple-sidebar.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use($);

new Vue({
  render: h => h(App),
}).$mount('#app')


new Vue({
  el: '#stats-div',
  data: {
    stats: [
      { id: 1, title: "Force", points: 1 },
      { id: 2, title: "Adresse", points: 1 },
      { id: 3, title: "Agilité", points: 1 },
      { id: 4, title: "Constitution", points: 1 },
      { id: 5, title: "Charisme", points: 1 }
    ]
  }
})


// Définition d'un nouveau composant appelé `button-counter`
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
})