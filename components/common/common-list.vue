<template>
	<view>
		<view class="common-list animated fadeIn fast">
			<view class="common-item" v-for="(common, index) in commonList" :key="index">
				<view class="item-left"><image :src="common.avatar" mode="aspectFit" lazy-load></image></view>
				<view class="item-right">
					<view class="item-user-info u-f u-f-jsb">
						<view class="item-user-info-left u-f">
							<view class="item-username">{{ common.nickname }}</view>
							<view class="item-user-sex u-f">
								<view class="icon iconfont tag-sex" :class="[common.sex === 1 ? 'man icon-nan' : 'woman icon-nv']">{{ '  ' + common.age }}</view>
							</view>
						</view>
						<template v-if="!common.isAttention">
							<view class="item-user-info-right u-f">
								<view class="icon iconfont icon-zengjia attention" @tap="attention(common.isAttention, index)">关注</view>
								<view class="icon iconfont icon-guanbi remove"></view>
							</view>
						</template>
					</view>
					<view class="item-content">{{ common.content }}</view>
					<template v-if="common.type === 1">
						<image :src="common.contentImage" mode="widthFix" lazy-load></image>
					</template>
					<template v-else-if="common.type === 2">
						<view class="item-media u-f-ajc">
							<image :src="common.contentImage" mode="widthFix" lazy-load></image>
							<view class="icon iconfont icon-bofang video-icon"></view>
							<view class="video-info">{{ common.video.info }}</view>
						</view>
					</template>
					<template v-else>
						<view class="item-share">
							<view class="shareImage"><image :src="common.shareObj.shareImage" class="as" lazy-load></image></view>
							<view class="share-content">{{ common.shareObj.shareContent }}</view>
						</view>
					</template>
					<view class="item-other u-f u-f-jsb">
						<view class="item-other-area">{{ common.area }}</view>
						<view class="interactive-info u-f">
							<view class="icon iconfont icon-zhuanfa"></view>
							<view class="interactive-number">{{ common.share }}</view>
							<view class="icon iconfont icon-pinglun1"></view>
							<view class="interactive-number">{{ common.comment }}</view>
							<view class="icon iconfont icon-dianzan"></view>
							<view class="interactive-number">{{ common.like }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: [
		'commonList',
		'listIndex'
		],
	methods: {
		attention(isAttention, index) {
			this.$emit('attentionUser', isAttention, index, this.listIndex);
		}
	}
	
};
</script>

<style lang="less" scoped>
	
	.item-user-info {
		height: 49upx;
	}
	
.common-list {
	.common-item {
		display: flex;
		padding: 10px;

		.item-left {
			margin-right: 10px;
			image {
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}

		.item-right {
			width: 100%;
			border-bottom: 1px solid #eeeeee;

			image {
				width: 100%;
				border-radius: 10px;
			}

			.item-other {
				margin: 10px 0 10px 0;

				.item-other-area {
					font-size: 15px;
					color: #bbbbbb;
				}

				.interactive-info {
					color: #bbbbbb;

					.iconfont {
						margin-right: 5px;
					}

					.interactive-number {
						margin-right: 5px;
					}
				}
			}
		}
	}
}

.item-username {
	color: #999999;
	margin-right: 5px;
}

.item-user-sex {
	align-items: center;
}

.tag-sex {
	border-radius: 15px;
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

.attention {
	background-color: #f4f4f4;
	border-radius: 5px;
	padding: 0 5px 0 5px;
	font-size: 14px;
	margin-right: 10px;
}

.remove {
	color: #d5d5d5;
	font-size: 15px;
	font-weight: bold;
}

.item-content {
	margin: 10px 0 10px 0;
}

.item-media {
	position: relative;
	.video-icon {
		position: absolute;
		color: #ffffff;
		font-size: 150upx;
	}

	.video-info {
		position: absolute;
		bottom: 5px;
		right: 5px;
		color: #ffffff;
		background-color: rgba(51, 51, 51, 0.72);
		border-radius: 15px;
		font-size: 11px;
		padding: 0 10px 0 10px;
	}
}

.item-share {
	background-color: #f7f7f7;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px 0 10px;
	image {
		width: 100%;
		height: 65%;
		border-radius: 50%;
	}

	.share-content {
	}
}
.shareImage {
	width: 200upx;
	height: 150upx;
	margin-right: 20upx;
	display: flex;
	align-items: center;
}
</style>
