import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import VueScrollTo from 'vue-scrollto'
import VueLazyload from 'vue-lazyload'
import Vuelidate from 'vuelidate'
import VueTyperPlugin from 'vue-typer'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    throttleWait: 200
})
Vue.use(Vuelidate)
Vue.use(VueTyperPlugin)
Vue.use(VueCookies)

new Vue({
    store,
    vuetify,
    Vuelidate,
    render: h => h(App)
}).$mount('#app')
