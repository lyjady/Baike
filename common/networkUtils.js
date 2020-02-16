const network = {
	isContent: false,
	on() {
		uni.getNetworkType({
			success: res => {
				this.isContent = res.networkType === 'none' ? false : true;
				if (!this.isContent) {
					uni.showToast({
						icon: 'none',
						title: '请重新连接网络'
					})
				}
			}
		})
	},
	listenNetworkChange() {
		uni.onNetworkStatusChange(res => {
			if (!res.isConnected) {
				uni.showToast({
					icon: 'none',
					title: '请重新连接网络'
				})
			} else {
				uni.showToast({
					icon: 'none',
					title: '切换到' + res.networkType + '网络'
				})
			}
			
		})
	}
}

export default {
	network
}