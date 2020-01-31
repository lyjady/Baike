<template>
	<view class="paper-item u-f" @tap="jumpChatPage">
		<view class="paper-item-right">
			<image :src="paper.avatar" lazy-load></image>
		</view>
		<view class="paper-item-left">
			<view class="paper-item-left-head u-f u-f-jsb">
				<view class="paper-item-left-head-username">
					{{ paper.username }}
				</view>
				<view class="paper-item-left-head-send-time">
					{{ paper.sendTime }}
				</view>
			</view>
			<view class="paper-item-left-footer u-f u-f-jsb">
				<view class="paper-item-left-footer-content">
					{{ paper.content }}
				</view>
				<view class="paper-item-left-footer-unread">
					<uni-badge class="uni-badge-left-margin" :text="paper.unread" type="error"></uni-badge>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue';
	export default {
		props: [
			'paper'
		],
		components: {
			uniBadge
		},
		methods: {
			jumpChatPage() {
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.paper-item {
		border-bottom: 1px solid #EEEEEE;
		
	}
		
	.paper-item-left {
		width: 100%;
	}
		
	.paper-item-right {
		margin-right: 20upx;
		image {
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
		}
	}
	
	.paper-item-left-head-username {
		font-weight: bold;
		font-size: 30upx;
	}
	
	.paper-item-left-footer-content {
		color: #999999;
	}
	
	.paper-item-left-head-send-time {
		color: #CBCBCB;
	}
	
	.paper-item {
		padding-bottom: 10upx;
		margin-bottom: 20upx;
	}
</style>
