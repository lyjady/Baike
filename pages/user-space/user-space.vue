<template>
	<view>
		<user-space :userInfo="userInfo"></user-space>
		<view class="space-data u-f-ajc">
			<block v-for="(data, index) in dataList" :key="index">
				<home-data :data="data"></home-data>
			</block>
		</view>
		<view class="user-space-mask" v-show="isShow" @tap="isShow = false"></view>
		<view v-show="isShow" class="option-menu animated fadeInDown fast">
			<view style="margin-bottom: 25upx;" class="icon iconfont icon-sousuo">
				拉黑
			</view>
			<view class="icon iconfont icon-qingchu">
				备注
			</view>
		</view>
		<view style="background-color: #F4F4F4; height: 15upx;"></view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tarIndex" @changeTar="changeTar" scrollViewBorderStyle="border-bottom: 0;" scrollViewHeightStyle="width: 33.33%;"></tar-swiper-header>
		<template v-if="tarIndex === 0">
			<user-space-info :userInfo="userInfo" :accoutInfo="accountInfo"></user-space-info>
		</template>
		<block v-for="(topicDetails,index) in topicDetailList" :key="index">
			<template v-if="tarIndex === index">
				<common-list :commonList="topicDetails.list" :listIndex="index" @attentionUser="attention"></common-list>
			</template>
		</block>
	</view>
</template>

<script>
	import homeData from '../../components/home/home-data.vue'; 
	import userSpace from '../../components/user-space/user-space.vue';
	import tarSwiperHeader from '../../components/index/tar-swiper-header.vue';
	import userSpaceInfo from '../../components/user-space/user-space-info.vue';
	import commonList from '../../components/common/common-list.vue';
	export default {
		components: {
			homeData,
			userSpace,
			tarSwiperHeader,
			userSpaceInfo,
			commonList
		},
		data() {
			return {
				dataList: [
					{ name: '获赞', number: '10k' },
					{ name: '关注', number: '24' },
					{ name: '粉丝', number: '42' }
				],
				userInfo: {
					isAttention: true,
					bg: '../../static/bgimg/1.jpg',
					bgIndex: 1,
					nickname: '楚青',
					gender: 0,
					age: 23,
					birthday: '1997-06-10',
					job: 'IT',
					home: '福建福州',
					maritalStatus: '未婚'
				},
				accountInfo: {
					regTime: '2018-04-16',
					id: '1215'
				},
				tabBars: [
					{ id: 1, name: '主页' },
					{ id: 2, name: '糗事' },
					{ id: 3, name: '动态' }
				],
				tarIndex: 0,
				isShow: false,
				topicDetailList: [
					{},
					{
						list: [
							{
								nickname: '周树人2',
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
								nickname: '周树人2',
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
								nickname: '周树人2',
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
								nickname: '周树人3',
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
								nickname: '周树人3',
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
								nickname: '周树人3',
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
			};
		},
		methods: {
			changeTar(index) {
				this.tarIndex = index;
			},
			attention(isAttention, index, listIndex) {
				this.topicDetailList[listIndex].list[index].isAttention = !isAttention;
				uni.showToast({
					title: '关注成功'
				});
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style lang="less" scoped>
.space-data {
	position: relative;
	font-weight: bolder;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
	margin-top: -35upx;
	z-index: 200;
	background-color: #FFFFFF;
	padding-top: 20upx;
	margin-bottom: 20upx;
}

.option-menu {
	position: fixed;
	right: 0;
	top: 40upx;
	background-color: #FFFFFF;
	box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	z-index: 1999;
	width: 40%;
	padding: 20upx;
	
	view {
		font-weight: bolder;
	}
}

.user-space-mask {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 1998;
}
</style>
