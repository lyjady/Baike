import Vue from 'vue'
import App from './App'
import config from 'common/config.js'
import networkUtils from 'common/networkUtils.js';
import userValida from 'common/userValida.js';
import request from 'common/request.js';

Vue.prototype.$config = config;
Vue.prototype.$networkUtils = networkUtils;
Vue.prototype.userValida = userValida;
Vue.prototype.$http = request;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
