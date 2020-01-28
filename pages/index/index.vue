<template>
	<view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tarIndex" @changeTar="changeTar" scrollViewBorderStyle="" scrollViewHeightStyle=""></tar-swiper-header>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tarIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item v-for="(items, index) in itemList" :key="index">
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore(index)">
						<template v-if="items.list.length > 0">
							<block v-for="(item, index2) in items.list" :key="index2"><item-list :item="item"></item-list></block>
							<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
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
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: [
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: [
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: [
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: [
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: [
						{
							id: '1',
							avatar: '/static/demo/userpic/10.jpg',
							nickname: '小脑袋大吉吉',
							isAttention: false,
							content: '震惊,一高校男子在校内草地上将校花强奸!!!!!!!!!!!',
							mediaType: 'photo',
							videoInfo: '',
							contentRef: '/static/demo/datapic/11.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 1,
								praiseNum: 298,
								caiNum: 30
							},
							commentNum: 6598,
							shareNum: 236
						},
						{
							id: '2',
							avatar: '/static/demo/userpic/11.jpg',
							nickname: '大脑袋小吉吉',
							isAttention: true,
							content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
							mediaType: 'video',
							videoInfo: '20w次播放 2:47',
							contentRef: '/static/demo/datapic/12.jpg',
							infoNum: {
								//0: 没有操作, 1: 赞, 2: 踩
								index: 2,
								praiseNum: 1258,
								caiNum: 32
							},
							commentNum: 9854,
							shareNum: 6589
						}
					]
				},
				{
					list: []
				},
				{
					list: []
				},
				{
					list: []
				}
			],
			tabBars: [
				{ id: 1, name: '关注' },
				{ id: 2, name: '推荐' },
				{ id: 3, name: '体育' },
				{ id: 4, name: '热点' },
				{ id: 5, name: '财经' },
				{ id: 6, name: '娱乐' },
				{ id: 7, name: '游戏' },
				{ id: 8, name: '历史' },
				{ id: 9, name: '军事' }
			],
			tarIndex: 0,
			swiperHeight: 0,
			loadingMoreInfo: '上拉加载更多'
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.swiperHeight = res.windowHeight - uni.upx2px(200);
			}
		});
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
		},
		tabChange(e) {
			this.tarIndex = e.detail.current;
		},
		loadingMore(index) {
			if (this.loadingMoreInfo !== '上拉加载更多') {
				return;
			}
			this.loadingMoreInfo = '加载中...';
			let item = {
				id: '2',
				avatar: '/static/demo/userpic/11.jpg',
				nickname: '大脑袋小吉吉',
				isAttention: true,
				content: '震惊,光天化日居然发生了群交!!!!!!!!!!!',
				mediaType: 'video',
				videoInfo: '20w次播放 2:47',
				contentRef: '/static/demo/datapic/12.jpg',
				infoNum: {
					//0: 没有操作, 1: 赞, 2: 踩
					index: 2,
					praiseNum: 1258,
					caiNum: 32
				},
				commentNum: 9854,
				shareNum: 6589
			};
			setInterval(() => {
				this.itemList[index].list.push(item);
				this.loadingMoreInfo = '上拉加载更多';
			}, 8000);
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
