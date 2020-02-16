import Vue from 'vue'
import App from './App'
import config from 'common/config.js'
import networkUtils from 'common/networkUtils.js';

Vue.prototype.$config = config;
Vue.prototype.$networkUtils = networkUtils;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
