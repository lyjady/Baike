<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.avatar" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-head u-f">
				<image src="/static/demo/topicpic/13.jpeg" lazy-load></image>
				<view class="topic-title">
					#{{ topicInfo.title }}#
				</view>
			</view>
			<view class="topic-info-center">
				动态 {{ topicInfo.dynamic }} 今日 {{ topicInfo.today }}
			</view>
			<view class="topic-info-footer">
				你在电梯里见到马云你会问什么, 90后女孩回答当场被录用
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'topicInfo'
		]
	}
</script>

<style lang="less" scoped>
	.topic-bg {
		width: 100%;
		height: 300upx;
		overflow: hidden;
		
		image {
			width: 100%;
			filter: blur(10px);
		}
	}
	
	.topic-info {
		padding: 0 30upx;
	}
	
	.topic-info-head {
		height: 75upx;
		margin-bottom: 20upx;
		image {
			width: 150upx;
			height: 150upx;
			border-radius: 20upx;
			top: -75upx;
			margin-right: 10upx;
		}
	}
	
	.topic-title {
		font-weight: bolder;
		margin-left: 20upx;
		margin-top: 10upx;
	}
	
	.topic-info-center {
		color: #CDCDCD;
		margin-bottom: 10upx;
	}
	
	.topic-info-footer {
		color: #A3A3A3;
	}
</style>
