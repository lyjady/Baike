<template>
	<view class="item animated fadeIn fast">
		<view class="item-header">
			<view class="item-header-left">
				<!-- 头像 -->
				<image :src="item.avatar" mode="aspectFit" lazy-load />
				<!-- 昵称 -->
				<span class="nickname">{{ item.nickname }}</span>
			</view>
			<template v-if="!isAttention">
				<view class="item-header-right">
					<view class="icon iconfont icon-zengjia" @tap="attention(isAttention)"><span>关注</span></view>
					<view class="icon iconfont icon-guanbi"></view>
				</view>
			</template>
		</view>
		<view class="item-info">
			<!-- 内容 -->
			<text class="content">{{ item.content }}!</text>
			<!-- 图片 -->
			<template v-if="item.mediaType === 'photo'">
				<view class="item-info-content">
					<image :src="item.contentRef" mode="widthFix" />
				</view>	
			</template>
			<!-- 视频 -->
			<template v-else>
				<view class="item-info-content">
					<image :src="item.contentRef" mode="widthFix" />
					<view class="icon iconfont icon-bofang"></view>
					<view class="play-info">{{ item.videoInfo }}</view>
				</view>
			</template>
		</view>
		<view class="item-footer">
			<view class="item-footer-left">
				<view :class="['icon', 'iconfont', 'icon-icon_xiaolian-mian', inforNum.index === 1 ? 'active' : '']" @tap="praiseOrCai(1)"><span class="number">{{ inforNum.praiseNum }}</span></view>
				<view :class="['icon', 'iconfont', 'icon-kulian', inforNum.index === 2 ? 'active' : '']" @tap="praiseOrCai(2)"><span class="number">{{ inforNum.caiNum }}</span></view>
			</view>
			<view class="item-footer-right">
				<view class="icon iconfont icon-pinglun1"><span class="number">{{ item.commentNum }}</span></view>
				<view class="icon iconfont icon-zhuanfa"><span class="number">{{ item.shareNum }}</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['item'],
		data () {
			return {
				isAttention: this.item.isAttention,
				inforNum: this.item.infoNum
			}
		},
		methods: {
			attention(isAttention) {
				this.isAttention = !isAttention;
				uni.showToast({
					title: '关注成功'
				})
			},
			praiseOrCai(type) {
				if (type === 1) {
					//判断原有的操作
					if (this.inforNum.index === 0 || this.inforNum.index === 2) {
						//如果是0或者2则顶
						if (this.inforNum.index === 2) {
							this.inforNum.caiNum--;
						}
						this.inforNum.index = 1
						this.inforNum.praiseNum++;
					} else if (this.inforNum.index === 1) {
						//如果是1则取消顶
						this.inforNum.index = 0
						this.inforNum.praiseNum--;
					}
				} else if (type === 2) {
					//判断原有的操作
					if (this.inforNum.index === 0 || this.inforNum.index === 1) {
						//如果是0或者1则踩
						if (this.inforNum.index === 1) {
							this.inforNum.praiseNum--;
						}
						this.inforNum.index = 2
						this.inforNum.caiNum++;
					} else if (this.inforNum.index === 2) {
						//如果是2则取消踩
						this.inforNum.index = 0
						this.inforNum.caiNum--;
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.item {
		padding: 10px;
		border-bottom: 1px solid #eeeeee;
	}
	
	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	
	.item-header-left .icon-zengjia {
		width: 100upx;
		height: 30upx;
		background-color: #f4f4f4;
	}
	
	.item-header-left {
		display: flex;
		align-items: center;
	
		image {
			width: 90upx;
			height: 90upx;
			border-radius: 100%;
			margin-right: 10px;
		}
	
		.nickname {
			color: #999999;
		}
	}
	
	.item-header-right {
		display: flex;
		justify-content: space-between;
	
		.icon-zengjia {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 90upx;
			height: 50upx;
			background-color: #f4f4f4;
			font-size: 25upx;
			text-align: center;
			border-radius: 5px;
		}
	
		.icon-guanbi {
			margin-left: 12px;
			color: #d5d5d5;
		}
	}
	
	.item-info {
		text {
			display: inline-block;
			text-indent: 2em;
		}
	
		image {
			margin-top: 10px;
			width: 100%;
			border-radius: 8px;
		}
	}
	
	.item-footer {
		display: flex;
		justify-content: space-between;
		color: #d5d5d5;
		padding-left: 10px;
		margin-bottom: 10px;
	
		.item-footer-left {
			display: flex;
			justify-content: space-between;
		}
	
		.item-footer-right {
			display: flex;
			justify-content: space-between;
		}
	}
	
	.number {
		margin: 0px 10px;
		font-size: 16px;
		color: #d5d5d5;
	}
	
	.item-info-content {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	
		.icon-bofang {
			position: absolute;
			color: #ffffff;
			font-size: 150upx;
		}
	
		.play-info {
			padding: 0px 8px;
			text-align: center;
			position: absolute;
			font-size: 25upx;
			background: rgba(51, 51, 51, 0.72);
			border-radius: 20px;
			color: #ffffff;
			bottom: 5px;
			right: 5px;
		}
		
	}
	
	.active {
		color: #ffef03;
	}
</style>
