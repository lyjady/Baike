<template>
	<view>
		<template v-if="!isLogin">
			<view class="not-login">
				<view class="notify-info">
					登录, 体验更多功能
				</view>
			</view>
			<view class="other-login u-f-ajc">
				<other-login></other-login>
			</view>
			<view class="local-login u-f-ajc">
				<view class="account-login" @tap="jumpLoginPage">
					账号密码登录
				</view>
				<view class="icon iconfont icon-jinru">
					
				</view>
			</view>
		</template>
		<template v-else>
			<login-info :loginInfo="loginInfo"></login-info>
		</template>
		<view class="user-data u-f-ajc">
			<block v-for="(data, index) in dataList" :key="index">
				<home-data :data="data"></home-data>
			</block>
		</view>
		<view class="adv">
			<view>
				<image src="../../static/demo/banner3.jpg" lazy-load></image>
			</view>
		</view>
		<view class="user-option-list">
			<block v-for="(option, index) in optionList" :key="index">
				<option-list :option="option" :index="index" :isLogin="isLogin"></option-list>
			</block>
		</view>
	</view>
</template>

<script>
	import optionList from '../../components/home/option-list.vue';
	import loginInfo from '../../components/home/login-info.vue';
	import otherLogin from '../../components/home/other-login.vue';
	import homeData from '../../components/home/home-data.vue';
	export default {
		components: {
			optionList,
			loginInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				dataList: [
					{ name: '糗事', number: 12 },
					{ name: '动态', number: 24 },
					{ name: '评论', number: 42 },
					{ name: '收藏', number: 234 }
				],
				optionList: [
					{
						name: '浏览历史',
						icon: 'icon-liulan',
						color: 'color: #44B3FF',
						needLogin: false,
						routerType: 'navigateTo',
						url : ''
					},
					{
						name: '官方认证',
						icon: 'icon-huiyuanvip',
						color: 'color: #FF7434',
						needLogin: false,
						routerType: 'navigateTo',
						url : ''
					},
					{
						name: '糗事审核',
						icon: 'icon-keyboard',
						color: 'color: #44B3FF',
						needLogin: true,
						routerType: 'navigateTo',
						url : ''
					}
				],
				isLogin: false,
				loginInfo: {
					avatar: '../../static/demo/datapic/21.jpg',
					nickname: '楚青',
					allVister: 1823,
					todayVister: 123
				}
			}
		},
		methods: {
			jumpLoginPage() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			connectWs() {
				uni.connectSocket({
					url: 'ws://192.168.0.108:8080/baike/wsServer/2',
					success: () => {}
				})
				uni.onSocketOpen(() => {
					console.log('connect success')
				})
				
				uni.onSocketMessage(res => {
					console.log("服务器的数据: " + res.data)
				})
			},
			closeConnect() {
				uni.closeSocket()
			}
		},
		onNavigationBarButtonTap(e) {
			this.userValida.navivateCheck({url: '../setting/setting'})
		}
	}
</script>

<style lang="less" scoped>
.not-login {
	margin-top: 30upx;
}
.notify-info {
	text-align: center;
	font-size: 32upx;
	margin-bottom: 40upx;
}

.user-data {
	padding: 0upx 20upx;
	margin-bottom: 40upx;
}

.local-login {
	margin-bottom: 20upx;
}

.account-login {
	font-size: 32upx;
}

.icon-jinru {
	color: #D5D5D5;
}

.adv {
	text-align: center;
	margin-bottom: 10upx;
	
	view {
		padding: 0upx 30upx;
		image {
			width: 100%;
			height: 240upx;
			border-radius: 30upx;
		}
	}
}
</style>
