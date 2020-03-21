export default {
	// 用户token
	token: '1Jk5u2uiUCy9svCWz+5mVQ==',
	// 用户信息
	userInfo: false,
	// 跳转权限验证
	navivateCheck(options, type = 'navgateTo') {
		if (!this.token) {
			uni.showToast({
				title: '请先登录',
				icon: 'none'
			})
			return uni.navigateTo({
				url: '/pages/login/login'
			})
		}
		switch(type) {
			case 'navgateTo': 
				uni.navigateTo(options);
				break;
			case 'redirectTo': 
				uni.redirectTo(options);
				break;
			case 'reLaunch': 
				uni.reLaunch(options);
				break;
			case 'switchTab':
				uni.switchTab(options);
				break;
		}
		
	}
}