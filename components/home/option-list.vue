<template>
	<view>
		<view class="user-option u-f-ac" :class="{'first-option' : index === 0}" hover-class="hover-option" v-if="option.needLogin === isLogin || isLogin" @tap="jumpTargePage">
			<view class="option-left">
				<view class="icon iconfont" :class="option.icon" :style="option.color"></view>
			</view>
			<view class="option-center">
				<view>
					{{ option.name }}
				</view>
			</view>
			<view class="option-right">
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'option',
			'index',
			'isLogin'
		],
		methods: {
			jumpTargePage() {
				switch(this.option.routerType) {
					case 'navigateTo': 
						uni.navigateTo({
							url: this.option.url
						});
						break;
					default: 
						break;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.option-item {
		padding: 0upx 30upx;
	}
	
	.user-option {
		margin: 0upx 30upx;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.option-center {
		width: 120%;
		view {
			font-size: 32upx;
		}
	}
	
	.option-left {
		margin-right: 15upx;
		margin-left: 10upx;
		view {
			font-size: 50upx;
		}
	}
	
	.option-right {
		width: 12%;
	}
	
	.first-option {
		border-top: 1upx solid #EEEEEE;
	}
	
	.hover-option {
		background-color: #EEEEEE;
	}
</style>
