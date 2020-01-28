<template>
	<view>
		<topic-info :topicInfo="topicInfo"></topic-info>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tarIndex" @changeTar="changeTar" scrollViewBorderStyle="border-bottom: 0;" scrollViewHeightStyle="width: 50%;"></tar-swiper-header>
		<view class="topic-detail-list">
			<block v-for="(topicDetails,index) in topicDetailList" :key="index">
				<view v-if="tarIndex === index">
					<common-list :commonList="topicDetails.list" :listIndex="index" @attentionUser="attention"></common-list>
					<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import tarSwiperHeader from '../../components/index/tar-swiper-header.vue';
	import loadingMore from '../../components/index/loading-more.vue';
	import commonList from '../../components/common/common-list.vue';
	export default {
		components: {
			topicInfo,
			tarSwiperHeader,
			loadingMore,
			commonList
		},
		data() {
			return {
				topicInfo: {
					avatar: '/static/demo/topicpic/13.jpeg',
					title: '忆往事, 敬余生',
					content: '你在电梯里见到马云你会问什么, 90后女孩回答当场被录用',
					dynamic: 4875,
					today: 1254
				},
				loadingMoreInfo: '上拉加载更多',
				tabBars: [
					{ id: 1, name: '默认' },
					{ id: 2, name: '最新' }
				],
				tarIndex: 0,
				swiperHeight: 0,
				topicDetailList: [
					{
						list: [
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
						]
					},
					{
						list: [
							{
								nickname: '周树人',
								age: 25,
								//1: 男, 2: 女
								sex: 1,
								avatar: '/static/demo/userpic/8.jpg',
								content: '你们抓鲁迅和我周树人有什么关系123456',
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
								content: '你们抓鲁迅和我周树人有什么关系123456',
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
								content: '你们抓鲁迅和我周树人有什么关系123456',
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
						]
					}
				]
			}
		},
		methods: {
			tabChange(e) {
				this.tarIndex = e.detail.current;
			},
			changeTar(index) {
				this.tarIndex = index;
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
					content: '你们抓鲁迅和我周树人有什么关系(新)',
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
					this.topicDetailList[index].list.push(item);
					this.loadingMoreInfo = '上拉加载更多';
				}, 4000);
			},
			attention(isAttention, index, listIndex) {
				this.topicDetailList[listIndex].list[index].isAttention = !isAttention;
				uni.showToast({
					title: '关注成功'
				});
			},
			getNewData() {
				let item = {
					nickname: '周树人',
					age: 25,
					sex: 1,
					avatar: '/static/demo/userpic/10.jpg',
					content: '你们抓鲁迅和我周树人有什么关系(下拉刷新)',
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
				this.topicDetailList[this.tarIndex].list = [];
				this.topicDetailList[this.tarIndex].list.push(item);
				this.topicDetailList[this.tarIndex].list.push(item);
				this.topicDetailList[this.tarIndex].list.push(item);
				this.topicDetailList[this.tarIndex].list.push(item);
				setInterval(() => {
					uni.stopPullDownRefresh();
				}, 2000)
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100);
				}
			});
		},
		onReachBottom() {
			this.loadingMore(this.tarIndex);
		},
		//监听下拉刷新事件
		onPullDownRefresh() {
			this.getNewData();
		}
	}
</script>

<style lang="less" scoped>
	.topic-bg {
		width: 100%;
		height: 300upx;
		overflow: hidden;
		
		image {
			width: 100%;
			filter: blur(10px);
		}
	}
	
	.topic-info {
		padding: 0 30upx;
	}
	
	.topic-info-head {
		height: 75upx;
		margin-bottom: 20upx;
		image {
			width: 150upx;
			height: 150upx;
			border-radius: 20upx;
			top: -75upx;
			margin-right: 10upx;
		}
	}
	
	.topic-title {
		font-weight: bolder;
		margin-left: 20upx;
		margin-top: 10upx;
	}
	
	.topic-info-center {
		color: #CDCDCD;
		margin-bottom: 10upx;
	}
	
	.topic-info-footer {
		color: #A3A3A3;
	}
</style>
