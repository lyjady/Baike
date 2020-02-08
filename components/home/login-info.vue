<template>
	<view>
		<view class="login-info">
			<view class="login-left">
				<view class="u-f-ajc">
					<image :src="loginInfo.avatar" lazy-load></image>
				</view>
			</view>
			<view class="login-center">
				<view class="login-center-header">
					<text>{{ loginInfo.nickname }}</text>
				</view>
				<view class="login-center-footer">
					<text>总访客 {{ loginInfo.allVister }}</text>
					<text>今日 {{ loginInfo.todayVister }}</text>
				</view>
			</view>
			<view class="login-right">
				<view class="icon iconfont icon-jinru">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'loginInfo'
		]
	}
</script>

<style lang="less" scoped>
	.login-info {
		margin-top: 30upx;
		padding: 0upx 30upx;
		display: flex;
		align-items: center;
		margin-bottom: 20upx;
	}
	
	.login-center {
		width: 80%;
	}
	
	.login-right {
		view {
			color: #000000;
		}
	}
	
	.login-center-footer {
		text {
			margin-right: 30upx;
			color: #969696;
		}
	}
	
	.login-center-header {
		text {
			font-size: 40upx;
		}
	}
	
	
	.login-left {
		
		view {
			image {
				height: 100upx;
				width: 100upx;
				border-radius: 100%;
				margin-right: 20upx;
			}
		}
	}
</style>
