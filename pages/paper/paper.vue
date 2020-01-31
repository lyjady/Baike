<template>
	<view>
		<view class="papar-left-popup-mask" v-show="isShow" @tap="isShow = false"></view>
		<view v-show="isShow" class="option-menu animated fadeInDown fast">
			<view style="margin-bottom: 25upx;" class="icon iconfont icon-sousuo">
				加糗友
			</view>
			<view class="icon iconfont icon-qingchu">
				清除未读
			</view>
		</view>
		<view class="paper-list animated fadeIn fast">
			<block  v-for="(paper, index) in paperList" :key="index">
				<paper-list :paper="paper"></paper-list>
			</block>
			<loading-more :loadingMoreInfo="loadingMoreInfo"></loading-more>
		</view>
		
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue';
	import loadingMore from '../../components/index/loading-more.vue';
	export default {
		components: {
			paperList,
			loadingMore
		},
		data() {
			return {
				isShow: false,
				paperList: [
					{
						username: '习近平',
						avatar: '/static/demo/datapic/20.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '李克强',
						avatar: '/static/demo/datapic/21.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '王岐山',
						avatar: '/static/demo/datapic/22.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '胡锦涛',
						avatar: '/static/demo/datapic/23.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '江泽民',
						avatar: '/static/demo/datapic/24.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '邓小平',
						avatar: '/static/demo/datapic/25.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},{
						username: '习近平',
						avatar: '/static/demo/datapic/20.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '李克强',
						avatar: '/static/demo/datapic/21.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '王岐山',
						avatar: '/static/demo/datapic/22.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '胡锦涛',
						avatar: '/static/demo/datapic/23.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '江泽民',
						avatar: '/static/demo/datapic/24.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '邓小平',
						avatar: '/static/demo/datapic/25.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					}
				],
				loadingMoreInfo: '上拉加载更多'
			}
		},
		methods: {
			getNewData() {
				let arr = [
					{
						username: '习近平123',
						avatar: '/static/demo/datapic/20.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '李克强123',
						avatar: '/static/demo/datapic/21.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '王岐山123',
						avatar: '/static/demo/datapic/22.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '胡锦涛123',
						avatar: '/static/demo/datapic/23.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '江泽民123',
						avatar: '/static/demo/datapic/24.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '邓小平123',
						avatar: '/static/demo/datapic/25.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					}
				];
				this.paperList = arr;
				setInterval(() => {
					uni.stopPullDownRefresh();
				}, 2000)
			},
			loadingMore() {
				if (this.loadingMoreInfo !== '上拉加载更多') {
					return;
				}
				this.loadingMoreInfo = '加载中...';
				let arr = [
					{
						username: '特朗普',
						avatar: '/static/demo/datapic/24.jpg',
						sendTime: '13:58',
						content: '大佬, 美利坚听您号令',
						unread: 1
					},
					{
						username: '普京',
						avatar: '/static/demo/datapic/25.jpg',
						sendTime: '13:58',
						content: '大佬, 俄罗斯听您号令',
						unread: 1
					}
				];
				
				setInterval(() => {
					this.paperList.push(arr[0]);
					this.paperList.push(arr[1]);
					this.loadingMoreInfo = '上拉加载更多';
				}, 2000);
			}
		},
		onPullDownRefresh() {
			this.getNewData();
		},
		onReachBottom() {
			this.loadingMore();
		},
		onNavigationBarButtonTap(e) {
			switch(e.index) {
				case 0: 
					this.isShow = false;
					uni.navigateTo({
						url: '../user-list/user-list'
					})
					break;
				case 1: 
					this.isShow = !this.isShow;
					break;
				default:
					break;
			}
		}
	}
</script>

<style lang="less" scoped>
.paper-list {
	padding: 20upx;
}

.option-menu {
	position: fixed;
	right: 0;
	top: 10upx;
	background-color: #FFFFFF;
	box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	z-index: 1999;
	width: 40%;
	padding: 20upx;
	
	view {
		font-weight: bolder;
	}
}

.papar-left-popup-mask {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 1998;
}
</style>
