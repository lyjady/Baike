<template>
	<view>
		<view class="chat-list">
			<block v-for="(chat, index) in chatList" :key="index">
				<user-chat-list :chat="chat" :index="index"></user-chat-list>
			</block>
		</view>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
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
			chatList: []
		};
	},
	methods: {
		submit(content) {
			console.log('收到子组件的数据' + content);
			this.content = content;
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
		}
	},
	onLoad() {
		this.getChatData();
	}
};
</script>

<style lang="less" scoped>
.chat-list {
	padding: 20upx;
}
</style>
