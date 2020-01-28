<template>
	<view class="topic-item animated fadeIn fast" @tap="jumpTopicDetail">
		<view class="item-avatar">
			<image :src="topic.avatar" mode="scaleToFill" lazy-load></image>
		</view>
		<view class="topic-item-right">
			<view class="item-title">
				#{{ topic.title }}#
			</view>
			<view class="item-content">
				{{ topic.content }}
			</view>
			<view class="item-interactive">
				动态 {{ topic.dynamic }} 今日 {{ topic.today }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'topic',
			'index'
		],
		methods: {
			jumpTopicDetail() {
				uni.navigateTo({
					url: '../topic-detail/topic-detail'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic-item {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		padding: 20upx 20upx 30upx 0upx;
		
		.item-avatar {
			width: 200upx;
			height: 200upx;
			margin-right: 40upx;
			
			image {
				width: 200upx;
				height: 200upx;
				border-radius: 15upx;
			}
		}
	}
	
	.item-title {
		font-size: 30upx;
	}
	
	.item-content, .item-interactive {
		color: #A4A4A4;
		font-size: 25upx;
	}
</style>
