<template>
	<view class="bind-email-container">
		<view class="bind-email-input">
			<input class="uni-input" v-model="email" placeholder-class="placeholder-font" placeholder="请输入要绑定的邮箱"/>
			<input class="uni-input" v-model="password" placeholder-class="placeholder-font" placeholder="请输入新密码" password/>
		</view>
		<button :class="emailAndPwdNotEq ? 'validate-success' : 'validate-fail'" :disabled="!emailAndPwdNotEq" @tap="commit" :loading="isLoading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				isLoading: false
			};
		},
		methods: {
			commit() {
				let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if (reg.test(this.email)) {
					this.isLoading = true;
					return
				}
				uni.showModal({
					showCancel: false,
					content: '请输入正确的邮箱'
				})
			}
		},
		computed: {
			emailAndPwdNotEq() {
				return this.email.trim().length !== 0 && this.password.trim().length !== 0;
			}
		}
	}
</script>

<style lang="less" scoped>
.bind-email-container {
	padding: 0upx 20upx;
}

.bind-email-input {
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

.validate-fail {
	margin-top: 40upx;
}

.validate-success {
	margin-top: 40upx;
	background-color: #FAE111;
	border: 1upx solid #D2C02A
}
</style>
