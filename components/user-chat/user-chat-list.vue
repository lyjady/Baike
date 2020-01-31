<template>
	<view class="chat-item">
		<view v-if="chat.formatTime" class="send-time u-f-ajc">
			<view>
				{{ chat.formatTime }}
			</view>
		</view>
		<view class="chat-info u-f u-f-jsb" :class="[chat.isMe ? 'me' : '']">
			<view v-if="chat.isMe"></view>
			<view class="u-f">
				<view class="chat-avatar" v-if="!chat.isMe"><image :src="chat.avatar" lazy-load></image></view>
				<view class="chat-content u-f-ajc" v-if="!chat.isImage">
					<view>
						{{ chat.content }}
					</view>
				</view>
				<view class="chat-image" v-if="chat.isImage"><image :src="chat.image" lazy-load></image></view>
				<view class="chat-avatar" v-if="chat.isMe"><image :src="chat.avatar" lazy-load></image></view>
			</view>
			<view v-if="!chat.isMe"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'chat',
			'index'
		]
	}
</script>

<style lang="less" scoped>
	.chat-list {
		padding: 20upx;
	}
	.chat-item {
		margin-bottom: 30upx;
	}
	
	.chat-avatar {
		height: 100upx;
		width: 100upx;
		image {
			height: 100upx;
			width: 100upx;
			border-radius: 100%;
		}
	}
	
	.chat-content {
		
		view {
			position: relative;
			background-color: #f4f4f4;
			border-radius: 10upx;
			padding: 10upx 20upx;
			margin-left: 30upx;
		}
		
	}
	
	.chat-content view:after {
		top: 10upx;
		position: absolute;
		left: -30upx;
		right: 0;
		content: '';
		width: 0;
		height: 0;
		border: 16upx solid #f4f4f4;
		border-color: transparent #f4f4f4 transparent transparent;
	}
	
	.chat-image:after {
		top: 30upx;
		position: absolute;
		left: -30upx;
		right: 0;
		content: '';
		width: 0;
		height: 0;
		border: 16upx solid #f4f4f4;
		border-color: transparent #f4f4f4 transparent transparent;
	}
	
	.me .chat-content view:after {
		left: auto;
		right: -30upx;
		border-color: transparent transparent transparent #f4f4f4;
	}
	
	.me view .chat-content {
		margin-right: 30upx;
	}
	
	.chat-image {
		position: relative;
		background-color: #f4f4f4;
		border-radius: 10upx;
		padding: 20upx 20upx 0upx 20upx;
		margin-right: 30upx;
	
		image {
			max-width: 300upx;
			max-height: 200upx;
		}
	}
	
	.me .chat-image:after {
		left: auto;
		right: -30upx;
		border-color: transparent transparent transparent #f4f4f4;
	}
	
	.send-time {
		margin-bottom: 20upx;
		color: #FFFFFF;
		view {	
			background-color: #DADADA;
			border-radius: 20upx;
			padding: 0 10upx;
		}
	}
</style>
