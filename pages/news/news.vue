<template>
	<view>
		<!-- 顶部导航栏 -->
		<news-nav-bar :tarBars="tarBars" :tarIndex="tarIndex" @changeBar="changeTar"></news-nav-bar>
		<!-- 内容 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tarIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item>
					<!-- 关注 -->
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore">
						<!-- 关注动态 -->
						<common-list :commonList="commonList" @attentionUser="attention"></common-list>
						<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<!-- 话题 -->
					<scroll-view class="list" scroll-y>
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder-class="icon iconfont icon-sousuo search-placrholder" placeholder="输入要搜索的内容"/>
						</view>
						<!-- 轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(image, index) in carouselImageList" :key="index">
								<swiper-item>
									<image :src="image" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<hot-classification :hotClassificationTag="hotClassificationTag" @jumpTopicNav="jumpTopicNav"></hot-classification>
						<!-- 话题列表 -->
						<view class="topic-list">
							<view>最近更新</view>
							<block v-for="(topic, index) in topicList" :key="index">
								<topic-list :topic="topic" :index="index"></topic-list>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import commonList from '../../components/common/common-list.vue';
import newsNavBar from '../../components/news/news-nav-bar.vue';
import loadingMore from '../../components/index/loading-more.vue';
import hotClassification from '../../components/news/hot-classification.vue';
import topicList from '../../components/news/topic-list.vue';
export default {
	data() {
		return {
			tarBars: [
				{
					id: 1,
					name: '关注'
				},
				{
					id: 2,
					name: '话题'
				}
			],
			carouselImageList: [
				'/static/demo/banner1.jpg',
				'/static/demo/banner2.jpg'
			],
			swiperHeight: 0,
			tarIndex: 0,
			commonList: [
				{
					nickname: '周树人',
					age: 25,
					//1: 男, 2: 女
					sex: 1,
					avatar: '/static/demo/userpic/8.jpg',
					content: '你们抓鲁迅和我周树人有什么关系',
					isAttention: true,
					contentImage: '/static/demo/datapic/1.jpg',
					area: '深圳 龙岗',
					share: 1245,
					comment: 8795,
					like: 10256,
					//1: 图片, 2: 视频, 3: 转发
					type: 1,
					video: {},
					shareObj: {}
				},
				{
					nickname: '周树人',
					age: 25,
					sex: 2,
					avatar: '/static/demo/userpic/9.jpg',
					content: '你们抓鲁迅和我周树人有什么关系',
					isAttention: false,
					contentImage: '/static/demo/datapic/2.jpg',
					area: '深圳 龙岗',
					share: 326,
					comment: 542,
					like: 1025,
					//1: 图片, 2: 视频, 3: 转发
					type: 2,
					video: {
						info: '20W 次播放 2:47'
					},
					shareObj: {}
				},
				{
					nickname: '周树人',
					age: 25,
					sex: 1,
					avatar: '/static/demo/userpic/10.jpg',
					content: '你们抓鲁迅和我周树人有什么关系',
					isAttention: false,
					contentImage: '',
					area: '深圳 龙岗',
					share: 985,
					comment: 125,
					like: 6598,
					//1: 图片, 2: 视频, 3: 转发
					type: 3,
					video: {},
					shareObj: {
						shareImage: '/static/demo/datapic/16.jpg',
						shareContent: '你们抓鲁迅和我周树人有什么关系'
					}
				}
			],
			loadingMoreInfo: '上拉加载更多',
			hotClassificationTag:[
				{
					id: 1,
					name: '最新'
				},
				{
					id: 2,
					name: '游戏'
				},
				{
					id: 3,
					name: '情感'
				},
				{
					id: 4,
					name: '打卡'
				},
				{
					id: 5,
					name: '故事'
				},
				{
					id: 6,
					name: '喜爱'
				}
			],
			topicList: [
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
		};
	},
	methods: {
		jumpRelease() {
			uni.navigateTo({
				url: '../release/release'
			});
		},
		tabChange(e) {
			this.tarIndex = e.detail.current;
		},
		changeTar(index) {
			this.tarIndex = index;
		},
		attention(isAttention, index) {
			this.commonList[index].isAttention = !isAttention;
			uni.showToast({
				title: '关注成功'
			});
		},
		loadingMore(index) {
			if (this.loadingMoreInfo !== '上拉加载更多') {
				return;
			}
			this.loadingMoreInfo = '加载中...';
			let item = {
				nickname: '周树人',
				age: 25,
				sex: 1,
				avatar: '/static/demo/userpic/10.jpg',
				content: '你们抓鲁迅和我周树人有什么关系',
				isAttention: false,
				contentImage: '',
				area: '深圳 龙岗',
				share: 985,
				comment: 125,
				like: 6598,
				//1: 图片, 2: 视频, 3: 转发
				type: 3,
				video: {},
				shareObj: {
					shareImage: '/static/demo/datapic/16.jpg',
					shareContent: '你们抓鲁迅和我周树人有什么关系'
				}
			};
			setInterval(() => {
				this.commonList.push(item);
				this.loadingMoreInfo = '上拉加载更多';
			}, 4000);
		},
		jumpTopicNav() {
			uni.navigateTo({
				url: '/pages/topic-nav/topic-nav'
			})
		}
	},
	components: {
		uniNavBar,
		commonList,
		newsNavBar,
		loadingMore,
		hotClassification,
		topicList
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.swiperHeight = res.windowHeight - uni.upx2px(200);
			}
		});
	}
};
</script>

<style lang="less" scoped>
	.search-input {
		padding: 10px 10px 5px 10px;
		
		input {
			background-color: #F4F4F4;
			border-radius: 5px;
		}
	}
	
	.search-placrholder {
		text-align: center;
		font-size: 27upx;
	}
	
	.topic-swiper {
		padding: 5upx 20upx 20upx 20upx;
		border-radius: 20upx;
		
		image {
			width: 100%;
			height: 100%;
			border-radius: 20upx;
		}
	}
	
	.topic-list {
		padding: 30upx;
		
		view {
			margin-bottom: 10upx;
		}
	}	
</style>
