<template>
	<view>
		<!-- 顶部导航栏 -->
		<news-nav-bar :tarBars="tarBars" :tarIndex="tarIndex" @changeBar="changeTar"></news-nav-bar>
		<!-- 内容 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tarIndex" :style="{ height: swiperHeight + 'px' }" @change="tabChange">
				<swiper-item>
					<scroll-view class="list" scroll-y @scrolltolower="loadingMore">
						<common-list :commonList="commonList" @attentionUser="attention"></common-list>
						<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="list" scroll-y>
						<view class="search-input">
							<input class="uni-input" placeholder-class="icon iconfont icon-sousuo search-placrholder" placeholder="输入要搜索的内容"/>
						</view>
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item>
								<image src="/static/demo/banner1.jpg" lazy-load></image>
							</swiper-item>
							<swiper-item>
								<image src="/static/demo/banner2.jpg" lazy-load></image>
							</swiper-item>
						</swiper>
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
			loadingMoreInfo: '上拉加载更多'
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
		}
	},
	components: {
		uniNavBar,
		commonList,
		newsNavBar,
		loadingMore
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
		padding: 10px;
		
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
		padding: 20upx 20upx 20upx 20upx;
		
		image {
			width: 100%;
			height: 100%;
			border-radius: 20upx;
		}
	}
</style>
