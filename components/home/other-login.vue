<template>
	<view class="other-login u-f-ajc">
		<view class="icon iconfont icon-weixin login u-f-ajc" @tap="login(3)"></view>
		<view class="icon iconfont icon-QQ login u-f-ajc" @tap="login(0)"></view>
		<view class="icon iconfont icon-xinlangweibo login u-f-ajc" @tap="login(2)"></view>
	</view>
</template>

<script>
	export default {
		methods: {
			login(index) {
				this.$emit('otherLogin', index)
			}
		}
	}
</script>

<style scoped>
	.login {
		width: 125upx;
		height: 125upx;
		font-size: 60upx;
		border-radius: 100%;
		margin: 0upx 30upx;
		color: #FFFFFF;
		margin-bottom: 40upx;
	}
	
	.icon-weixin {
		background-color: #2BD19B;
		border: 1upx solid #2BD19B;
	}
	
	.icon-QQ {
		background-color: #2CAEFC;
		border: 1upx solid #2CAEFC;
	}
	
	.icon-xinlangweibo {
		background-color: #FC7729;
		border: 1upx solid #FC7729;
	}
	
</style>
