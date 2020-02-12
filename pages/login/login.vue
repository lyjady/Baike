<template>
	<view>
		<uni-status-bar :backgroundColor="'#FFE933'"></uni-status-bar>
		<!-- 关闭图标 -->
		<view class="icon iconfont icon-guanbi" @tap="backHomePage"></view>
		<!-- 背景图片 -->
		<image class="login-bg" src="../../static/common/loginhead.png" lazy-load></image>
		<!-- 账号密码登录输入框 -->
		<template v-if="!isValidateLogin">
			<view class="login-input">
				<input class="uni-input" v-model="account" placeholder-class="placeholder-font" placeholder="昵称/手机号/邮箱"/>
				<view class="password-login">
					<input class="uni-input password-input" v-model="password" placeholder-class="placeholder-font" placeholder="请输入密码" password/>
					<view class="forget-password u-f-ajc">
						忘记密码?
					</view>
				</view>
			</view>
		</template>
		<!-- 验证码登录输入框 -->
		<template v-else>
			<view class="login-input">
				<view class="phone-code">
					<view class="phone-prefix u-f-ajc">
						+86
					</view>
					<input class="uni-input phone-input" v-model="phone" placeholder-class="placeholder-font" placeholder="输入手机号码"/>
				</view>
				<view class="validate-code">
					<input class="uni-input validate-input" v-model="validateCode" placeholder-class="placeholder-font" placeholder="请输入验证码"/>
					<view class="get-validate-code u-f-ajc" @tap="getValidateCode">
						{{ validateCodeBtnContent }}
					</view>
				</view>
			</view>
		</template>
		<!-- 登录按钮 -->
		<button class="login-btn" :class="[enableBtn ? 'login-btn-access' : 'login-btn-not-access']" :disabled="!enableBtn">登录</button>
		<!-- 验证码登录 -->
		<view class="validate-code-login u-f-ajc">
			<text @tap="toggleLoginType">验证码登录</text>
			<view class="icon iconfont icon-jinru">
				
			</view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc">
			<view class="title-left"></view>
			<view class="title-center">
				第三方登录
			</view>
			<view class="title-right"></view>
		</view>
		<other-login @otherLogin="otherLogin"></other-login>
		<!-- 用户协议 -->
		<view class="user-agreement u-f-ajc">
			注册即代表您同意
			<view class="user-agreement-hightlight">
				《百科用户协议》
			</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
	import otherLogin from '../../components/home/other-login.vue';
	export default {
		components: {
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				account: '',
				password: '',
				phone: '',
				validateCode: '',
				isValidateLogin: false,
				btnIsEnable: false,
				validateCodeBtnContent: '验证码登录',
				oauthType: []
			};
		},
		methods: {
			backHomePage() {
				uni.navigateBack({
					delta: 1
				})
			},
			toggleLoginType() {
				this.isValidateLogin = !this.isValidateLogin;
				this.account = this.password = this.phone = this.validateCode = '';
			},
			getValidateCode() {
				if (this.validateCodeBtnContent !== '验证码登录') {
					uni.showToast({
						title: '操作太频繁了, 紧着投胎啊',
						icon: 'none'
					})
					return;
				}
				if (this.phone.trim().length === 0) {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					})
					return;
				}
				let phoneReg = /^1[34578]\d{9}$/
				if (phoneReg.test(this.phone)) {
					this.validateCodeBtnContent = '10s';
					let timer = setInterval((res => {
						this.validateCodeBtnContent = parseInt(this.validateCodeBtnContent) - 1 + 's';
						if (this.validateCodeBtnContent === '0s') {
							clearInterval(timer);
							this.validateCodeBtnContent = '验证码登录'
						}
					}), 1000)
				} else {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
				}
			},
			otherLogin(index) {
				uni.login({
					provider: this.oauthType[index],
					success: res => {
						console.log(JSON.stringify(res))
						uni.getUserInfo({
							provider: this.oauthType[index],
							lang: 'zh_CN',
							success: res => {
								console.log(JSON.stringify(res))
							},
							fail: res => {
								console.log(JSON.stringify(res))
							}
						})
					}
				});
			}
		},
		computed: {
			enableBtn() {
				if (this.isValidateLogin) {
					return this.phone.trim().length !== 0 && this.validateCode.trim().length !== 0;
				} else {
					return this.account.trim().length !== 0 && this.password.trim().length !== 0;
				}
			}
		},
		onLoad() {
			uni.getProvider({
				service: 'oauth',
				success: (res => {
					this.oauthType = res.provider;
				})
			})
		}
	}
</script>

<style lang="less" scoped>
.validate-input {
	padding-right: 180upx;
}
.phone-input {
	padding-left: 100upx;
}
.password-input {
	padding-right: 150upx;
}
.icon-guanbi {
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	z-index: 100;
}

.login-bg {
	width: 100%;
	margin-bottom: 30upx;
}

.login-input {
	padding: 0 30upx;
}

input {
	border-bottom: 1upx solid #EEEEEE;
	margin-bottom: 10upx;
	padding-bottom: 20upx;
}

.placeholder-font {
	font-weight: bolder;
}

.login-btn {
	margin: 40upx 30upx 50upx 30upx;
}

.login-btn-access {
	background-color: #FAE111;
}

.login-btn-not-access {
	background-color: #F4F4F4;
}

.validate-code-login {
	font-size: 32upx;
}

.icon-jinru {
	color: #D5D5D5;
}

.title-center {
	margin: 40upx 30upx 30upx 30upx;
	color: #999999;
	position: relative;
}

.title-right, .title-left {
	border: 1.5upx solid #E2E2E2;
	width: 15%;
	margin-top: 10upx;
}

.user-agreement {
	font-size: 32upx;
	color: #999999;
}

.user-agreement-hightlight {
	color: #2BAEFC;
}

.password-login {
	position: relative;
}

.password-login .forget-password {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	z-index: 200;
	width: 150upx;
}

.phone-code {
	position: relative;
}

.phone-code .phone-prefix {
	position: absolute;
	height: 100%;
	left: 0;
	width: 100upx;
	font-weight: bolder;
}

.validate-code {
	position: relative;
}

.validate-code .get-validate-code {
	position: absolute;
	height: 90%;
	width: 180upx;
	background-color: #F4F4F4;
	top: 0;
	right: 0;
	color: #9D9D9D;
	border-radius: 15upx;
}
</style>
