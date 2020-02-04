<template>
	<view>
		<view class="chat-list">
			<scroll-view scroll-y :scroll-top="scrollTop" :style="{height: currentHeight + 'px'}" scroll-with-animation>
				<block v-for="(chat, index) in chatList" :key="index">
					<user-chat-list class="chat-view" :chat="chat" :index="index"></user-chat-list>
				</block>
			</scroll-view>
		</view>
		<user-chat-bottom ref="bottomBtnRef" id="bottom-btn" :content="content" @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
import time from '../../common/time.js';
import UserChatList from '../../components/user-chat/user-chat-list.vue';
export default {
	components: {
		userChatBottom,
		UserChatList
	},
	data() {
		return {
			content: '',
			chatList: [],
			currentHeight: 0,
			allChatViewHeight: 0,
			scrollTop: 0
		};
	},
	methods: {
		submit(content) {
			if (content.length > 0) {
				this.content = content;
				let chat = {
					avatar: '/static/demo/userpic/6.jpg',
					content: this.content,
					sendTime: new Date().getTime(),
					isImage: false,
					image: '',
					isMe: true,
					formatTime: time.gettime.getChatTime(new Date().getTime(), this.chatList[this.chatList.length - 1].sendTime)
				}
				this.chatList.push(chat);
				this.content = '';
				this.computerChatViewHeight();
			}
		},
		getChatData() {
			let list = [
				{
					avatar: '/static/demo/userpic/6.jpg',
					content: '终身学习, 善用大脑',
					sendTime: '1580412484',
					isImage: false,
					image: '',
					isMe: true
				},
				{
					avatar: '/static/demo/userpic/6.jpg',
					content: '终身学习, 善用大脑',
					sendTime: '1580462414',
					isImage: false,
					image: '',
					isMe: false
				},
				{
					avatar: '/static/demo/userpic/6.jpg',
					content: '终身学习, 善用大脑',
					sendTime: '1580472484',
					isImage: true,
					image: '/static/demo/banner1.jpg',
					isMe: true
				},
				{
					avatar: '/static/demo/userpic/6.jpg',
					content: '终身学习, 善用大脑',
					sendTime: '1580472562',
					isImage: false,
					image: '',
					isMe: false
				}
			];
			list.forEach((chat, index) => {
				chat.formatTime = time.gettime.getChatTime(chat.sendTime, index > 0 ? list[index - 1].sendTime : 0)
			})
			this.chatList = list;
		},
		computerPageHeight() {
			uni.getSystemInfo({
				success: res => {
					this.currentHeight = res.windowHeight - uni.upx2px(100);
				}
			})
		},
		computerChatViewHeight() {
			let selectorQuery = uni.createSelectorQuery();
			selectorQuery.selectAll('.chat-item').boundingClientRect().exec(res => {
				let allHeight = 0;
				res[0].forEach(item => {
					allHeight += item.height;
				})
				this.allChatViewHeight = allHeight;
				if (this.allChatViewHeight > this.currentHeight) {
					this.scrollTop = this.allChatViewHeight;
				}
			});
		}
	},
	onLoad() {
		this.getChatData();
	},
	onReady() {
		this.computerPageHeight();
		this.computerChatViewHeight();
	}
};
</script>

<style lang="less" scoped>
.chat-list {
	padding: 20upx;
}
</style>
