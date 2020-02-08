<template>
	<view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tabIndex" @changeTar="changeTar" scrollViewBorderStyle="border-bottom: 0;" scrollViewHeightStyle="width: 33%;"></tar-swiper-header>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item v-for="(users, index) in userList" :key="index">
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore(index)">
						<view class="topic-list">
							<template v-if="users.list.length > 0">
								<view class="user-list">
									<block v-for="(user, index2) in users.list" :key="index2">
										<user-list :user="user" :index="index2"></user-list>
									</block>
								</view>
								<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
							</template>
							<template v-else>
								<nothing></nothing>
							</template>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import tarSwiperHeader from '../../components/index/tar-swiper-header.vue';
import userList from '../../components/paper/user-list.vue';
import loadingMore from '../../components/index/loading-more.vue';
import nothing from '../../components/common/nothing.vue';
export default {
	components: {
		tarSwiperHeader,
		userList,
		loadingMore,
		nothing
	},
	data() {
		return {
			tabBars: [{ id: 1, name: '互关', num: 10 }, { id: 2, name: '关注', num: 10 }, { id: 3, name: '粉丝', num: 10 }],
			swiperHeight: 0,
			tabIndex: 0,
			loadingMoreInfo: '上拉加载更多',
			userList: [
				{
					list: [
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 1: 男, 2: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
					]
				},
				{
					list: [
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 1: 男, 2: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
					]
				},
				{
					list: [
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 1: 男, 2: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 1,
							age: 13,
							isAttention: true
						},
						{
							avatar: '/static/demo/datapic/10.jpg',
							username: '穷哈',
							// 0: 男, 1: 女
							sex: 2,
							age: 13,
							isAttention: false
						},
					]
				}
			]
		};
	},
	methods: {
		changeTar(index) {
			this.tabIndex = index;
		},
		tabChange(e) {
			this.tabIndex = e.detail.current;
		},
		loadingMore(index) {
			if (this.loadingMoreInfo !== '上拉加载更多') {
				return;
			}
			this.loadingMoreInfo = '加载中...';
			let item = {
				avatar: '/static/demo/datapic/10.jpg',
				username: '穷哈1234',
				sex: 1,
				age: 13,
				isAttention: false
			};
			setInterval(() => {
				this.userList[this.tabIndex].list.push(item);
				this.loadingMoreInfo = '上拉加载更多';
			}, 2000);
		}
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.swiperHeight = res.windowHeight - uni.upx2px(100);
			}
		});
	}
};
</script>

<style lang="less" scoped>
.user-list {
	padding: 20upx;
}

</style>
