import config from './config.js';
import userValid from './userValida.js';
export default {
	config: {
		urlPrefix: config.api,
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: "json",
	},
	// 发送AJAX请求
	request(options = {}) {
		options.header = options.header || this.config.header;
		options.method = options.method || this.config.method;
		options.dataType = options.dataType || this.config.dataType;
		options.url = this.config.urlPrefix + options.url;
		// 判断是否要验证token
		if (options.token && !userValid.token) {
			uni.showToast({
				title: '请先登录',
				icon: 'none'
			})
			return uni.navigateTo({
				url: '/pages/login/login'
			})
		}
		if (userValid.token) {
			options.header.Authenticate = userValid.token;
		}
		return uni.request(options);
	},
	// get请求
	get(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = 'GET';
		return this.request(options);
	},
	// post请求
	post(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = 'POST';
		return this.request(options);
	},
	// 错误处理
	handleError(err, res, errFuc = false, resFun = false) {
		if (err) {
			typeof errFuc === 'function' && errFuc();
			uni.showToast({
				title: '系统异常',
				icon: 'none'
			})
			return true;
		}
		if (res.data.code === 50000) {
			typeof resFuc === 'function' && resFuc();
			uni.showToast({
				title: res.data.message,
				icon: 'none'
			})
			return true;
		}
		return false;
	}
}
