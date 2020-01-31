<template>
	<view>
		<view class="user-chat-bottom u-f-ac u-f-jsb">
			<input type="text" placeholder="文明发言" v-model="content" placeholder-class="send-holder"/>
			<view class="send u-f-ajc" @tap="sendContent">
				<view class="icon iconfont icon-fabu">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		methods: {
			sendContent() {
				this.$emit('submit', this.content);
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-chat-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60upx;
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		border-top: 1upx solid #EEEEEE;
		
		input {
			padding: 10upx 20upx;
			background-color: #F7F7F7;
			border-radius: 10upx;
			width: 80%;
		}
		
		.send {
			width: 20%;
		}
		
		.icon-fabu {
			font-size: 50upx;
		}
	}
	
	.send-holder {
		font-weight: 540;
	}
</style>

