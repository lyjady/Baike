<template>
	<view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tarIndex" @changeTar="changeTar" scrollViewBorderStyle="" scrollViewHeightStyle=""></tar-swiper-header>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tarIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item v-for="(items, index) in itemList" :key="index">
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore()">
						<template v-if="items.list.length > 0">
							<block v-for="(item, index2) in items.list" :key="index2"><item-list :item="item"></item-list></block>
							<loading-more :loadingMoreInfo="items.loadText"></loading-more>
						</template>
						<template v-else-if="items.firstLoad">
							<view style="font-size: 50upx;font-weight: bold;color: #CCCCCC; padding-top: 100upx;" class="u-f-ajc">Loading ...</view>
						</template>
						<template v-else>
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import itemList from '../../components/index/item-list.vue';
import tarSwiperHeader from '../../components/index/tar-swiper-header.vue';
import loadingMore from '../../components/index/loading-more.vue';
import nothing from '../../components/common/nothing.vue';
export default {
	data() {
		return {
			itemList: [
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				},
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				},
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				},
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				},
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				},
				{
					list: [
						
					],
					pageNumber: 1,
					loadText: '上拉加载更多',
					firstLoad: true
				}
			],
			tabBars: [],
			tarIndex: 0,
			swiperHeight: 0
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.swiperHeight = res.windowHeight - uni.upx2px(100);
			}
		});
		this.getPostClass();
		this.getPostList();
	},
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 1) {
			uni.navigateTo({
				url: '../release/release'
			})
		}
	},
	methods: {
		changeTar(index) {
			this.tarIndex = index;
			this.getPostList();
		},
		tabChange(e) {
			this.tarIndex = e.detail.current;
			this.getPostList();
		},
		async getPostClass() {
			let [err, res] = await this.$http.get('/post/getPostCategoryList');
			let hasErr = this.$http.handleError(err, res);
			if (!hasErr) {
				console.log(res)
				this.tabBars = res.data.data;
				this.tabBars.forEach(item => {
					item.name = item.classname;
				})
			} else {
				return uni.showToast({
					title: '加载失败',
					icon: 'none'
				})
			}
		},
		async getPostList() {
			let[err, res] = await this.$http.get('/post/findPostByPostClass/' + this.tarIndex + '/pageNumber/' + this.itemList[this.tarIndex].pageNumber);
			let hasErr =  this.$http.handleError(err, res);
			if (!hasErr) {
				let postList = res.data.data;
				postList.forEach(post => {
					this.itemList[this.tarIndex].list.push(this.formatPostDate(post));
				})
				if (postList.length < 10) {
					this.itemList[this.tarIndex].loadText = '没有更多数据了'
				}
				this.itemList[this.tarIndex].firstLoad = false;
			}
		},
		formatPostDate(post) {
			let index;
			if (post.isUp === 0 && post.isDown === 0) {
				index = 0;
			} else if (post.isUp === 1) {
				index = 1;
			} else if (post.isDown === 1) {
				index = 2;
			}
			return {
				id: post.id,
				avatar: post.user.userpic,
				nickname: post.user.username,
				content: post.content,
				mediaType: 'photo',
				contentRef: post.titlepic,
				infoNum: {
					index: index,
					praiseNum: post.up,
					caiNum: post.down
				},
				commentNum: post.comment,
				shareNum: post.sharenum
			}
		},
		loadingMore() {
			if (this.itemList[this.tarIndex].loadText !== '上拉加载更多') {
				return;
			}
			this.itemList[this.tarIndex].pageNumber++;
			this.getPostList();
		}
	},
	components: {
		itemList,
		tarSwiperHeader,
		loadingMore,
		nothing
	}
};
</script>

<style lang="less">

</style>
