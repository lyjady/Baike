<template>
	<view class="change-passowrd-container">
		<view class="password-input">
			<input class="uni-input" v-model="oldPassowrd" placeholder-class="placeholder-font" placeholder="请输入旧密码" password/>
			<input class="uni-input" v-model="newPassowrd" placeholder-class="placeholder-font" placeholder="请输入新密码" password/>
			<input class="uni-input" v-model="confirmPassword" placeholder-class="placeholder-font" placeholder="请确认密码" password/>
		</view>
		<button :class="[oldPasswordNotEmpty && newPwdEqConfirmPwd ? 'validate-success' : 'change-password-btn']" @tap="commit" :disabled="!oldPasswordNotEmpty && !newPwdEqConfirmPwd" :loading="isLoading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassowrd: '',
				newPassowrd: '',
				confirmPassword: '',
				isLoading: false
			};
		},
		methods: {
			commit() {
				if (this.newPassowrd === this.confirmPassword) {
					this.isLoading = true;
					return;
				}
				uni.showModal({
					showCancel: false,
					content: '两次输入的密码不同, 请重新输入'
				})
			}
		},
		computed: {
			oldPasswordNotEmpty() {
				if (this.oldPassowrd.trim().length !== 0) {
					return true;
				}
				return false;
			},
			newPwdEqConfirmPwd() {
				if (this.newPassowrd.trim().length !== 0 && this.confirmPassword.trim().length !== 0) {
					return true;
				}
				return false;
			}
		}
	}
</script>

<style lang="less" scoped>
.change-passowrd-container {
	padding: 0upx 20upx;
}

.password-input {
	input {
		border-bottom: 1upx solid #EEEEEE;
		margin-bottom: 10upx;
		padding-bottom: 20upx;
	}
}

.placeholder-font {
	font-size: 32upx;
	color: #858585;
}

.change-password-btn {
	margin-top: 40upx;
}

.validate-success {
	margin-top: 40upx;
	background-color: #FAE111;
	border: 1upx solid #D2C02A
}
</style>
