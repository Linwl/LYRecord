// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Tabbar,
  TabItem,
  Toast,
  Header,
  Button
}
from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/permission'
import store from './store'
import axios from '@/utils/request'

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Toast.name, Toast);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
