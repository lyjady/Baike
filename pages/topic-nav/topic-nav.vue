<template>
	<view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tabIndex" @changeTar="changeTar"></tar-swiper-header>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item v-for="(topics, index) in topicList" :key="index">
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore(index)">
						<view class="topic-list">
							<template v-if="topics.list.length > 0">
								<block v-for="(topic, index2) in topics.list" :key="index2">
									<topic-list :topic="topic" :index="index2"></topic-list>
								</block>
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
	import topicList from '../../components/news/topic-list.vue';
	import nothing from '../../components/common/nothing.vue';
	import loadingMore from '../../components/index/loading-more.vue';
	export default {
		components: {
			tarSwiperHeader,
			topicList,
			nothing,
			loadingMore
		},
		data() {
			return {
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
				tabIndex: 0,
				swiperHeight: 0,
				topicList: [
					{
						list: [
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/27.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/28.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/29.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							}
						]
					},
					{
						list: [
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							}
						]
					},
					{
						list: [
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							}
						]
					},
					{
						list: [
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							}
						]
					},
					{
						list: [
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/24.jpg',
								title: '英雄不朽, 拉起来继续送',
								content: '退休老兵反复横死, 到底是人性的扭曲还是道德沦丧。请关注守望先锋教学节目《天使大招的释放技巧》',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/26.jpg',
								title: '你亲身经历的灵异事件',
								content: '走出去, 才发现你跟别人差的不是一点半点',
								dynamic: 4875,
								today: 1254
							},
							{
								avatar: '/static/demo/datapic/25.jpg',
								title: '天天打卡',
								content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
								dynamic: 4875,
								today: 1254
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
					},
					{
						list: []
					}
				],
				loadingMoreInfo: '上拉加载更多'
			}
		},
		methods: {
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			changeTar(index) {
				this.tabIndex = index;
			},
			loadingMore(index) {
				if (this.loadingMoreInfo !== '上拉加载更多') {
					return;
				}
				this.loadingMoreInfo = '加载中...';
				let item = {
					avatar: '/static/demo/datapic/25.jpg',
					title: '天天打卡',
					content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
					dynamic: 4875,
					today: 1254
				};
				setInterval(() => {
					this.topicList[index].list.push(item);
					this.loadingMoreInfo = '上拉加载更多';
				}, 2000);
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100);
				}
			});
		}
	}
</script>

<style lang="less" scoped>
	.topic-list {
		padding: 30upx;
		
		view {
			margin-bottom: 10upx;
		}
	}
</style>
