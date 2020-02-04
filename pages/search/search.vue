<template>
	<view>
		<template v-if="!isSearch"></template>
		<template v-else-if="searchList.length > 0">
			<block v-for="(item, index) in searchList" :key="index">
				<index-list :item="item"></index-list>
			</block>
			<loadingMore :loadingMoreInfo="loadingMoreInfo"></loadingMore>
		</template>
		<template v-else-if="isSearch && searchList.length === 0">
			<nothing></nothing>
		</template>
	</view>
</template>

<script>
import indexList from '../../components/index/item-list.vue';
import nothing from '../../components/common/nothing.vue';
import loadingMore from '../../components/index/loading-more.vue';
export default {
	components: {
		indexList,
		nothing,
		loadingMore
	},
	data() {
		return {
			searchList: [],
			isSearch: false,
			loadingMoreInfo: '上拉加载更多',
			searchContent: ''
		};
	},
	methods: {
		loadingMore() {
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
				this.searchList.push(item);
				this.loadingMoreInfo = '上拉加载更多';
			}, 2000);
		}
	},
	onReachBottom() {
		this.loadingMore();
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	onNavigationBarSearchInputChanged(e) {
		this.searchContent = e.text;
	},
	onNavigationBarSearchInputConfirmed(e) {
		if (this.searchContent.length > 0) {
			uni.showLoading();
			let result = {
				id: '1',
				avatar: '/static/demo/userpic/10.jpg',
				nickname: '小脑袋大吉吉',
				isAttention: false,
				content: e.text,
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
			};
			this.searchList.push(result);
			uni.hideLoading();
			this.isSearch = true;
		} else {
			uni.showModal({
				title: '无效的搜索内容',
				content: '请输入正确的搜索内容',
				showCancel: false
			})
		}
		
	}
};
</script>

<style lang="less"></style>
