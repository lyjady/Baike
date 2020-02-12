<template>
	<view>
		<view class="bg u-f-ajc">
			<image :src="bg" mode="aspectFill" lazy-load @tap="changeBgIndex"></image>
			<view class="space-info u-f-ajc">
				<view class="space-avatar"><image src="../../static/demo/datapic/21.jpg" lazy-load></image></view>
				<view class="nickname-gender">
					<view class="nickname">{{ userInfo.nickname }}</view>
					<view class="space-gender u-f-ac">
						<view class="icon iconfont tag-sex" :class="[userInfo.gender === 0 ? 'icon-nan man' : 'icon-nv woman']">{{ userInfo.age }}</view>
					</view>
				</view>
				<view @tap="isAttention = !isAttention">
					<view :class="[isAttention ? 'attentioned' : 'space-attention']">
						<view class="icon iconfont" :class="isAttention ? '' : ' icon-zengjia'">{{ isAttention ? '已关注' : '关注' }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'userInfo'
		],
		data() {
			return {
				isAttention: this.userInfo.isAttention,
				bgIndex: this.userInfo.bgIndex,
				bg: this.userInfo.bg
			}
		},
		methods: {
			changeBgIndex() {
				this.bgIndex = this.bgIndex + 1 <= 4 ? this.bgIndex + 1 : 1;
				this.bg = '../../static/bgimg/' + this.bgIndex + '.jpg';
			}
		}
	}
</script>

<style lang="less" scoped>
.bg {
	height: 500upx;
	position: relative;
	margin-bottom: 20upx;
	image {
		position: absolute;
		top: 0;
		width: 100%;
		height: 500upx;
	}
	.space-info {
		position: absolute;
		top: 130upx;
		flex-direction: column;
		.space-avatar {
			width: 100upx;
			height: 100upx;
			margin-bottom: 20upx;
			image {
				width: 100upx;
				height: 100upx;
				border-radius: 100%;
			}
		}
	}
}

.tag-sex {
	border-radius: 15px;
	border: 4upx solid #ffffff;
	color: #ffffff;
	font-size: 14px;
	padding: 0 8px 0 8px;
	line-height: 18px;
}

.man {
	background-color: #44b3ff;
}

.woman {
	background-color: #ff6a8d;
}

.nickname-gender {
	display: flex;
	color: #ffffff;
	margin-bottom: 20upx;
	.nickname {
		font-size: 36upx;
		font-weight: bolder;
		margin-right: 10upx;
	}
}

.space-attention {
	background-color: #ffe933;
	padding: 5upx 15upx;
	border-radius: 15upx;
	letter-spacing: 5upx;
}

.attentioned {
	padding: 5upx 15upx;
	border-radius: 15upx;
	letter-spacing: 5upx;
	background: none;
	color: #ffffff;
	border: 2upx solid #ffffff;
}
</style>
