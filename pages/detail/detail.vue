<template>
	<view>
		<detail-info :item="item"></detail-info>
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(comment, index) in comment.commentList" :key="comment.id">
				<detail-comment :comment="comment"></detail-comment>
			</block>
		</view>
		<view style="height: 120upx;"></view>
		<user-chat-bottom :content="content" @submit="submit"></user-chat-bottom>
		<more-share :enableShare="enableShare" @toggle="toggleShareShow"></more-share>
	</view>
</template>

<script>
import detailInfo from '../../components/detail/detail-info.vue';
import detailComment from '../../components/detail/detail-comment.vue';
import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
import time from '../../common/time.js';
import moreShare from '../../components/common/more-share.vue';
export default {
	
	components: {
		detailInfo,
		detailComment,
		userChatBottom,
		moreShare
	},
	data() {
		return {
			item: {},
			comment: {
				commentList: [],
				count: 2
			},
			content: '',
			enableShare: false
		};
	},
	onLoad(e) {
		console.log(e.item)
		this.item = JSON.parse(e.item);
		// this.initData();
		uni.setNavigationBarTitle({
			title: this.item.content
		});
		this.getComment();
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			this.enableShare = !this.enableShare;
		}
	},
	methods: {
		initData() {
			this.item.imageList = [
				'/static/demo/datapic/1.jpg',
				'/static/demo/datapic/2.jpg',
				'/static/demo/datapic/3.jpg',
				'/static/demo/datapic/4.jpg',
				'/static/demo/datapic/15.jpg',
				'/static/demo/datapic/16.jpg',
				'/static/demo/datapic/7.jpg',
				'/static/demo/datapic/8.jpg',
				'/static/demo/datapic/11.jpg'
			];
			this.item.sex = '2';
			this.item.age = 24;
			this.item.type = 1;
			this.item.area = '福建福州';
			this.item.share = 3123;
			this.item.comment = 4213;
			this.item.like = 1223;
		},
		getComment() {
			let arr = [
				// 一级评论
				{
					id: 1,
					fid: 0,
					userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					username: '小猫咪',
					time: time.gettime.gettime(1555400035),
					data: '支持国产，支持DCloud!'
				},
				// 子级评论
				{
					id: 2,
					fid: 1,
					userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					username: '小猫咪',
					time: time.gettime.gettime(1555400035),
					data: '支持国产，支持DCloud!'
				},
				{
					id: 3,
					fid: 1,
					userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					username: '小猫咪',
					time: time.gettime.gettime(1555400035),
					data: '支持国产，支持DCloud!'
				},
				{
					id: 4,
					fid: 0,
					userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					username: '小猫咪',
					time: time.gettime.gettime(1555400035),
					data: '支持国产，支持DCloud!'
				}
			];
			this.comment.commentList = arr;
		},
		submit(content) {
			if (content.length > 0) {
				let comment = {
					id: this.comment.commentList[this.comment.commentList.length - 1].id,
					fid: 0,
					userpic: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					username: '小猫咪',
					time: time.gettime.gettime(new Date().getTime()),
					data: content
				}
				this.comment.commentList.push(comment);
				uni.showToast({
					title: '评论成功'
				})
			}
		},
		toggleShareShow(isEnable) {
			this.enableShare = isEnable;
		}
	}
};
</script>

<style lang="less" scoped>


.u-comment{
	padding: 0 20upx;
}
.u-comment-title{
	padding: 20upx;
	font-size: 30upx;
	font-weight: bold;
}


</style>
